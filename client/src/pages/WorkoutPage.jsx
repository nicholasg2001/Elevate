import WorkoutCard from "../components/Workouts/WorkoutCard";
import Legs from "/src/assets/workouts/legs.png";
import Abs from "/src/assets/workouts/abs.png";
import Cardio from "/src/assets/workouts/cardio.png";
import Arms from "/src/assets/workouts/arms.png";
import WorkoutSearchBar from "../components/Workouts/WorkoutSearchBar";
import WorkoutModal from "../components/Modals/WorkoutModal";
const WorkoutPage = () => {
  return (
    <>
      <WorkoutModal />
      <div className="flex gap-5 justify-center">
        <WorkoutSearchBar />
      </div>
      <div className="container mx-auto p-4 lg:p-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {/* Once we have API setup, replace Workout object as a prop*/}
          {/* Data transformation with difficulty colors, img enum etc. */}
          <WorkoutCard
            name="Single Leg Press"
            img={Legs}
            muscle={"Legs"}
            difficulty={"Easy"}
            type={"Strength"}
          />
          <WorkoutCard
            name="Lateral Hop"
            img={Abs}
            muscle={"Abs"}
            difficulty={"Medium"}
            type={"Strength"}
          />
          <WorkoutCard
            name="Running"
            img={Cardio}
            muscle={"Cardio"}
            difficulty={"Easy"}
            type={"Strength"}
          />
          <WorkoutCard
            name="Biking"
            img={Cardio}
            muscle={"Cardio"}
            difficulty={"Easy"}
            type={"Strength"}
          />
          <WorkoutCard
            name="Barbell Curl"
            img={Arms}
            muscle={"Arms"}
            difficulty={"Easy"}
            type={"Strength"}
          />
          <WorkoutCard
            name="DeadLifts"
            img={Legs}
            muscle={"Legs"}
            difficulty={"Easy"}
            type={"Strength"}
          />
        </div>
      </div>
    </>
  );
};

export default WorkoutPage;
