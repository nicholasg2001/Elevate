import ProgressBar from "@ramonak/react-progress-bar";
import { FaPersonRunning } from "react-icons/fa6";
const RunningOverview = () => {
  return (
    <div className="w-1/3 h-full bg-white rounded-xl relative">
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-300  rounded-full p-2 z-10">
        <FaPersonRunning size={40} className="text-white" />
      </div>
      <div className="pt-12 pb-4 px-4">
        <div className="flex flex-col text-center mt-6">
          <span className="font-bold text-purple-700 text-xl">Daily Running</span>
          <span className="text-gray-500">10 km / week</span>
        </div>
        <div className="my-2">
          Progress
          <ProgressBar completed={75} />
        </div>
        <span className="text-gray-500 font-semibold">Target: 50km</span>
      </div>
    </div>
  );
}

export default RunningOverview;