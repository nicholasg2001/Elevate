import { Spinner } from "flowbite-react";
import { useGetTopWorkoutsQuery } from "../redux/services/WorkoutService";
import WorkoutCard from "../components/Workouts/WorkoutCard";
import Legs from "/src/assets/workouts/legs.png";
import WorkoutSearchBar from "../components/Workouts/WorkoutSearchBar";
import WorkoutModal from "../components/Modals/WorkoutModal";
import WorkoutsFilter from "../components/Workouts/WorkoutsFilter";

const WorkoutPage = () => {
  const { data, isLoading } = useGetTopWorkoutsQuery("Workouts");

  return (
    <>
      <div className="flex justify-center">
        <WorkoutSearchBar />
        <WorkoutsFilter />
      </div>
      <div className="container mx-auto p-4 lg:p-10 relative">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {!isLoading ? (
            data.map((workout) => (
              <WorkoutCard
                key={workout.id}
                name={workout.name}
                img={Legs}
                muscle={workout.muscle}
                difficulty={workout.difficulty}
                type={workout.type}
              />
            ))
          ) : (
            <div className="flex justify-center w-screen">
              <Spinner aria-label="Profile loading spinner" size="xl" />
            </div>
          )}
        </div>
      </div>
      <WorkoutModal />
    </>
  );
};

export default WorkoutPage;
