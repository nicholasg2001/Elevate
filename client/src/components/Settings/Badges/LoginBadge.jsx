import { BsFire } from "react-icons/bs";
import { Tooltip, Rating } from "flowbite-react";
import LoginToolTip from "../ToolTip/LoginToolTip";

const LoginBadge = ({ level, achieved }) => {
  const days =
    level === 1 ? 7 :
      level === 2 ? 14 :
        level === 3 ? 30 : 0;

  const badgeColor = achieved ? "bg-blue-300" : "bg-gray-300";
  const textColor = achieved ? "text-white" : "text-gray-700";
  const iconColor = achieved ? "red" : "gray";

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= level; i++) {
      stars.push(<Rating.Star key={i} />);
    }
    return stars;
  };

  return (
    <Tooltip content={<LoginToolTip requirement={days} />}>
      <div className={`clip-rhombus ${badgeColor} w-32 h-32 flex justify-center items-center relative cursor-pointer`}>
        <div className="flex flex-col items-center">
          <BsFire size={35} color={iconColor} />
          <span className={`${textColor} font-semibold`}>Daily Login</span>
          <Rating>
            {renderStars()}
          </Rating>
        </div>
      </div>
    </Tooltip>
  );
};

export default LoginBadge;
