import { IoFootstepsOutline } from "react-icons/io5";
const CardioBadge = ({ level }) => {
  const badgeColorClass =
    level === "bronze"
      ? "bg-yellow-900"
      : level === "silver"
      ? "bg-gray-300"
      : level === "gold"
      ? "bg-yellow-300"
      : "bg-gray-200";

  const milesRan =
    level === "bronze"
      ? 10
      : level === "silver"
      ? 50
      : level === "gold"
      ? 100
      : 0;

  return (
    <div className="flex justify-center items-center mx-auto my-8">
      <div
        className={`clip-rhombus ${badgeColorClass} w-32 h-32 flex justify-center items-center relative`}
      >
        <div className="flex flex-col items-center">
          <IoFootstepsOutline size={35} color="white" />
          <span className="text-white">Miles Ran</span>
          <div className="text-white">{milesRan}</div>
        </div>
      </div>
    </div>
  );
};

export default CardioBadge;
