import { useState, useEffect } from "react";
const WeekHighlights = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {width >= 768 ?
        (<div className="bg-gradient-to-t from-blue-800 via-blue-500 to-cyan-500 dark:from-darkColor1 dark:to-darkColor2 rounded-xl h-3/4 shadow-lg p-2 sm:p-4">
          <h1 className="text-center font-bold text-xl sm:text-2xl text-white mb-2 sm:mb-4">Week Highlights</h1>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-white">
              <thead>
                <tr>
                  <th className="text-left text-xs sm:text-sm md:text-lg">Achievements</th>
                  <th className="text-right text-xs sm:text-sm md:text-lg">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white">
                  <td className="md:py-1 sm:py-2">New PR Record</td>
                  <td className="md:py-1 sm:py-2 text-right">Achieved</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="md:py-1 sm:py-2">Weekly Calorie Goal</td>
                  <td className="md:py-1 sm:py-2 text-right">Hit</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="py-1 sm:py-2">Log-in Streak</td>
                  <td className="py-1 sm:py-2 text-right">6 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        )
        : (<div className="bg-cyan-600 rounded-xl shadow-lg h-3/4 p-4">
          <h1 className="text-center font-bold text-2xl text-white mb-4">Week Highlights</h1>
          <ul className="text-white text-sm list-disc list-inside">
            <li>New deadlift record!</li>
            <li>Weekly Calorie Goal hit!</li>
            <li>Logged in 6 days in a row!</li>
            <li>New deadlift record!</li>
          </ul>
        </div>
        )
      }
    </>
  );
};

export default WeekHighlights;
