import { useState } from "react";
import { Spinner } from "flowbite-react";
import AddDailyWorkoutModal from "../Modals/AddDailyWorkoutModal";
import { filterWorkoutImages } from "./workoutUtils";
import { useGetAllWorkoutsQuery } from "../../redux/services/WorkoutService";
import WorkoutCard from "./WorkoutCard";
const WorkoutsContainer = ({ search }) => {
  const { data, isLoading } = useGetAllWorkoutsQuery("Workouts");
  const [workoutID, setWorkoutID] = useState(0);

  const filterWorkouts = (workouts) => {
    return workouts.filter((workout) =>
      workout.name
        .toLowerCase()
        .replace(/[^a-zA-Z]+/g, "")
        .includes(search.toLowerCase().replace(/[^a-zA-Z]+/g, ""))
    );
  };

  return (
    <div className="container mx-auto p-4 lg:p-10 relative">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {!isLoading &&
          data &&
          filterWorkouts(data).map((workout) => (
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
