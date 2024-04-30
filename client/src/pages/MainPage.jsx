import { useEffect } from "react";
import GoogleSignInModal from "../components/Modals/GoogleSignInModal";
import { openGoogleSetupModal } from "../redux/feats/global/globalSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import WeeklyCaloriesChart from "../components/Main/Charts/WeeklyCaloriesChart";
import WeeklyStepChart from "../components/Main/Charts/WeeklyStepsChart";
import WeeklyWorkoutsChart from "../components/Main/Charts/WeeklyWorkoutsChart";
import CustomToasts from "../components/Toasts/CustomToasts";
import { GiConverseShoe } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import StepsOverview from "../components/Main/StepsOverview";
import BikeOverview from "../components/Main/BikeOverview";
import RunningOverview from "../components/Main/RunningOverview";


const MainPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.height || !user.weight) {
      dispatch(openGoogleSetupModal());
    }
  }, []);
  return (
    <>
      <div className="flex justify-center bg-gradient-to-b from-color7 to-color3 dark:from-darkColor1 dark:to-darkColor2 w-screen h-screen">
        <div className="flex flex-col h-full w-3/4 bg-gray-200 dark:bg-gray-700 rounded-xl justify-center px-10 gap-10">
          <h1 className="text-5xl font-bold text-center dark:text-white">Weekly Report</h1>
          <div className="flex gap-14 w-full h-1/2">
            <div className="w-3/4 flex justify-center items-center bg-white rounded-lg">
              <WeeklyStepChart />
            </div>
            <div className="flex flex-col w-1/4 gap-10">
              <div className="bg-gradient-to-t from-blue-800 via-blue-500 to-cyan-500 dark:from-darkColor1 dark:to-darkColor2 h-1/6 cursor-pointer rounded-xl flex justify-center items-center gap-4">
                <div className="bg-white rounded-xl flex justify-center items-center h-1/2 w-1/4">
                  <GiConverseShoe size={30} />
                </div>
                <span className="text-lg text-white font-bold">
                  Daily Walking
                </span>
              </div>
              <div className="bg-cyan-600 rounded-xl h-3/4 p-1">
                <div className="bg-cyan-500 h-1/3 rounded-xl flex justify-center gap-4 items-center">
                  <div className="bg-blue-400 h-14 w-14 rounded-lg flex justify-center items-center">
                    <FaBottleWater size={30} color="white" />
                  </div>
                  <span className="text-lg text-white font-bold">
                    Water Intake
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <span>Total Ounces</span>
                  70
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 h-1/4">
            <BikeOverview />
            <RunningOverview />
            <StepsOverview />
          </div>
        </div>
      </div>
      <GoogleSignInModal />
      <CustomToasts />
    </>
  );
};

export default MainPage;
