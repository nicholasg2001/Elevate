import ProgressBar from "@ramonak/react-progress-bar";
import { MdDirectionsBike } from "react-icons/md";
const BikeOverview = () => {
  return(
    <div className="w-1/3 h-full bg-white dark:bg-slate-500 rounded-xl relative">
    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-300 dark:bg-purple-500 rounded-full p-2 z-10">
      <MdDirectionsBike size={40} className="text-black dark:text-white" />
    </div>
    <div className="pt-12 pb-4 px-4">
      <div className="flex flex-col text-center mt-6">
        <span className="font-bold text-purple-700 dark:text-purple-800 text-xl">Cycling Hero</span>
        <span className="text-gray-500 dark:text-white">10 km / week</span>
      </div>
      <div className="my-2 dark:text-white">
        Progress
        <ProgressBar completed={55} />
      </div>
      <span className="text-gray-500 font-semibold">Target: 50km</span>
    </div>
  </div>
  )
}

export default BikeOverview;