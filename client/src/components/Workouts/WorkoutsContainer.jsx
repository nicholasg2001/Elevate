import { useState } from "react";
import { Spinner } from "flowbite-react";
import { useGetAllWorkoutsQuery } from "../../redux/services/WorkoutService";
import WorkoutCard from "./WorkoutCard";
import Legs from "/src/assets/workouts/legs.png";
const WorkoutsContainer = ({ search }) => {
  const { data, isLoading } = useGetAllWorkoutsQuery("Workouts");
  const [paginate, setPaginate] = useState(6);

  const filterWorkouts = (workouts) => {
    const filteredByName = workouts.filter((workout) =>
      workout.name
        .toLowerCase()
        .replace(/[^a-zA-Z]+/g, "")
        .includes(search.toLowerCase().replace(/[^a-zA-Z]+/g, ""))
    );
    return filteredByName;
  };

  return (
    <div className="container mx-auto p-4 lg:p-10 relative">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {isLoading && (
          <div className="flex justify-center w-screen">
            <Spinner aria-label="Profile loading spinner" size="xl" />
          </div>
        )}
        {!isLoading &&
          data &&
          filterWorkouts(data).map((workout) => (
            <WorkoutCard
              workout={workout}
              img={Legs}
              key={workout.workout_id}
            />
          ))}
      </div>
    </div>
  );
};

export default WorkoutsContainer;
