import LoginBadge from "./Badges/LoginBadge";
import CardioBadge from "./Badges/CardioBadge";
import WorkoutBadge from "./Badges/WorkoutBadge";
const GoalsTab = () => {
  return (
    <div className="p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-1/2">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Goals Tab</h3>
      <div className="flex flex-col gap-8 text-black font-bold">
        <div>
          <span className="flex justify-center text-xl mb-4">Daily Logins</span>
          <div className="flex justify-evenly">
            <LoginBadge level={1} achieved={true} />
            <LoginBadge level={2} achieved={false} />
            <LoginBadge level={3} achieved={false} />
          </div>
        </div>
        <div>
          <span className="flex justify-center text-xl mb-4">Cardio</span>
          <div className="flex justify-evenly">
            <CardioBadge level={1} achieved={true} />
            <CardioBadge level={2} achieved={false} />
            <CardioBadge level={3} achieved={false} />
          </div>
        </div>
        <div>
          <span className="flex justify-center text-xl mb-4">Workouts</span>
          <div className="flex justify-evenly">
            <WorkoutBadge level={1} achieved={true} />
            <WorkoutBadge level={2} achieved={false} />
            <WorkoutBadge level={3} achieved={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsTab;
