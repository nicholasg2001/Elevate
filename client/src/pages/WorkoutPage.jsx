import WorkoutCard from "../components/Workouts/WorkoutCard";
import Legs from "/src/assets/workouts/legs.png";
import Abs from "/src/assets/workouts/abs.png";
import Cardio from "/src/assets/workouts/cardio.png";
import Arms from "/src/assets/workouts/arms.png";
import WorkoutSearchBar from "../components/Workouts/WorkoutSearchBar";
import WorkoutModal from "../components/Modals/WorkoutModal";
import { useGetTopWorkoutsQuery } from "../redux/services/WorkoutService";
const WorkoutPage = () => {
  const { data, isLoading } = useGetTopWorkoutsQuery("Workouts");
  return (
    <>
      <WorkoutModal />
      <div className="flex gap-5 justify-center">
        <WorkoutSearchBar />
      </div>
      <div className="container mx-auto p-4 lg:p-10">
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
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkoutPage;
