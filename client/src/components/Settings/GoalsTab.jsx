import LoginBadge from "./LoginBadge";
const GoalsTab = () => {
  return (
    <div className="p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-1/2">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Goals Tab</h3>
      <LoginBadge level={"bronze"} />
      <LoginBadge level={"silver"} />
      <LoginBadge level={"gold"} />
    </div>
  );
};

export default GoalsTab;
