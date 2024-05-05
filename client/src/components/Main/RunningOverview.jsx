import ProgressBar from "@ramonak/react-progress-bar";
import { FaPersonRunning } from "react-icons/fa6";
const RunningOverview = ({ isAdmin }) => {
  return (
    <div className="w-1/3 h-full bg-white dark:bg-slate-800 rounded-xl relative">
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-300 dark:bg-purple-500 rounded-full p-2 z-10">
        <FaPersonRunning size={40} className="text-black dark:text-white" />
      </div>
      <div className="md:pt-12 pt-4 md:pb-4 px-4">
        <div className="flex flex-col text-center mt-6">
          <span className="font-bold text-purple-700 dark:text-puple-800 text-sm md:text-xl">
            Daily Running
          </span>
          <span className="text-gray-500 dark:text-white text-sm md:text-base">
            10 km / week
          </span>
        </div>
        <div className="md:my-2 dark:text-white text-sm md:text-base">
          Progress
          <ProgressBar completed={`${isAdmin ? 75 : 0}`} />
        </div>
        <span className="text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base">
          Target: 50km
        </span>
      </div>
    </div>
  );
};

export default RunningOverview;
