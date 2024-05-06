import { Tooltip, Rating } from "flowbite-react";
import { IoFootstepsOutline } from "react-icons/io5";
import CardioToolTip from "../ToolTip/CardioToolTip";
const CardioBadge = ({ level, achieved }) => {
  const milesRan =
    level === 1
      ? 10
      : level === 2
        ? 50
        : level === 3
          ? 100
          : 0;

  const badgeColor = achieved ? "bg-blue-300" : "bg-gray-300";
  const iconColor = achieved ? "blue" : "gray";
  const textColor = achieved ? "text-white" : "text-gray-700";

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= level; i++) {
      stars.push(<Rating.Star key={i} />);
    }
    return stars;
  };

  return (
    <Tooltip content={<CardioToolTip requirement={milesRan}/>}>
      <div className={`clip-rhombus ${badgeColor} w-32 h-32 flex justify-center items-center relative cursor-pointer`}>
        <div className="flex flex-col items-center">
          <IoFootstepsOutline size={35} color={iconColor} />
          <span className={`${textColor} font-semibold`}>Miles Ran</span>
          <Rating>
           {renderStars()}  
          </Rating>
        </div>
      </div>
    </Tooltip>

  );
};

export default CardioBadge;
