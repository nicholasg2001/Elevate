import WorkoutCard from "../components/Workouts/WorkoutCard";
const WorkoutPage = () => {
  return (
    <div className="flex justify-center w-screen h-screen bg-color7 border-b border-gray-400">
      <div className="bg-white rounded-lg w-full h-full p-10">
        <div className="flex justify-center flex-wrap gap-10">
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
