import LoginBadge from "./Badges/LoginBadge";
import CardioBadge from "./Badges/CardioBadge";
import WorkoutBadge from "./Badges/WorkoutBadge";
const GoalsTab = () => {
  return (
    <div className="p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-1/2">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Goals Tab</h3>
      <div className="flex gap-10">
        <div>
          <LoginBadge level={"bronze"} />
          <LoginBadge level={"silver"} />
          <LoginBadge level={"gold"} />
        </div>

        <div>
          <CardioBadge level={"bronze"} />
          <CardioBadge level={"silver"} />
          <CardioBadge level={"gold"} />
        </div>

        <div>
          <WorkoutBadge level={"bronze"} />
          <WorkoutBadge level={"silver"} />
          <WorkoutBadge level={"gold"} />
        </div>
      </div>
    </div>
  );
};

export default GoalsTab;
