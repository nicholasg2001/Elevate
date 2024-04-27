import { MdOutlineSportsGymnastics } from "react-icons/md";
const WorkoutBadge = ({ level }) => {
  const badgeColorClass =
    level === "bronze"
      ? "bg-yellow-900"
      : level === "silver"
      ? "bg-gray-300"
      : level === "gold"
      ? "bg-yellow-300"
      : "bg-gray-200";

  const days =
    level === "bronze"
      ? 7
      : level === "silver"
      ? 14
      : level === "gold"
      ? 30
      : 0;

  return (
    <div className="flex justify-center items-center mx-auto my-8">
      <div
        className={`clip-rhombus ${badgeColorClass} w-32 h-32 flex justify-center items-center relative`}
      >
        <div className="flex flex-col items-center">
          <MdOutlineSportsGymnastics size={35} color="white" />
          <span className="text-white">Workouts</span>
          <div className="text-white">{days}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutBadge;
