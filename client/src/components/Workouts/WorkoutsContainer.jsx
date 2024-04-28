import { useState } from "react";
import { Spinner } from "flowbite-react";
import AddDailyWorkoutModal from "../Modals/AddDailyWorkoutModal";
import { filterWorkoutImages } from "./workoutUtils";
import { useGetAllWorkoutsQuery } from "../../redux/services/WorkoutService";
import WorkoutCard from "./WorkoutCard";

const WorkoutsContainer = ({ search, muscleFilter, typeFilter, difficultyFilter }) => {
  const { data, isLoading } = useGetAllWorkoutsQuery("Workouts");
  const [workoutID, setWorkoutID] = useState(0);

  const filterWorkouts = (workouts) => {
    return workouts.filter(workout => {
      const workoutName = workout.name.toLowerCase().replace(/[^a-zA-Z]+/g, "");
      const searchTerm = search.toLowerCase().replace(/[^a-zA-Z]+/g, "");
      let matchesSearch = workoutName.includes(searchTerm);
      
      let matchesMuscle = muscleFilter ? workout.muscle.includes(muscleFilter) : true;
      let matchesType = typeFilter ? workout.type.includes(typeFilter) : true;
      let matchesDifficulty = difficultyFilter ? workout.difficulty.includes(difficultyFilter) : true;

      return matchesSearch && matchesMuscle && matchesType && matchesDifficulty;
    });
  };

  return (
    <div className="container mx-auto p-4 lg:p-10 relative">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {!isLoading && data && filterWorkouts(data).map((workout) => (
          <WorkoutCard
            key={workout.workout_id}
            onClick={() => setWorkoutID(workout.workout_id)}
            workout={workout}
            img={filterWorkoutImages(workout.muscle)}
          />
        ))}
      </div>
      {isLoading && (
        <div className="flex justify-center w-screen">
          <Spinner aria-label="Profile loading spinner" size="xl" />
        </div>
      )}
      <AddDailyWorkoutModal workout_id={workoutID} />
    </div>
  );
};

export default WorkoutsContainer;
