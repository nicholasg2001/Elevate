import { Rating, Tooltip } from "flowbite-react";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import WorkoutToolTip from "../ToolTip/WorkoutToolTip";
const WorkoutBadge = ({ level, achieved }) => {
  const diffWorkouts =
    level === 1 ? 3 :
      level === 2 ? 5 :
        level === 3 ? 10 : 0;

  const badgeColor = achieved ? "bg-blue-300" : "bg-gray-300";
  const textColor = achieved ? "text-white" : "text-gray-700";
  const iconColor = achieved ? "yellow" : "gray";

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= level; i++) {
      stars.push(<Rating.Star key={i} />);
    }
    return stars;
  };


  return (
    <Tooltip content={<WorkoutToolTip requirement={diffWorkouts} />}>
      <div className={`clip-rhombus ${badgeColor} w-32 h-32 flex justify-center items-center relative cursor-pointer`}>
        <div className="flex flex-col items-center">
          <MdOutlineSportsGymnastics size={35} color={iconColor} />
          <span className={`${textColor} font-semibold`}>Workouts</span>
          <Rating>
            {renderStars()}
          </Rating>
        </div>
      </div>
    </Tooltip>
  );
};

export default WorkoutBadge;
