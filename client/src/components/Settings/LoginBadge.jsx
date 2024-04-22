import React from "react";

const LoginBadge = ({ level }) => {
  const badgeColorClass =
    level === "bronze"
      ? "bg-yellow-950"
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

  const textColorClass =
    badgeColorClass === "bg-gray-200" ? "text-gray-600" : "text-white";

  return (
    <div className="flex justify-center items-center mx-auto my-8">
      <div
        className={`clip-rhombus ${badgeColorClass} w-32 h-32 flex justify-center items-center relative`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="inline-block text-xl">👟</span>
          <span className={`${textColorClass} block text-xs`}>{days} days</span>
          <span className={`text-gray-500 block text-xs ${textColorClass}`}>
            Daily Logins
          </span>
          <span className="inline-block text-xl">⚡</span>
        </div>
      </div>
    </div>
  );
};

export default LoginBadge;
