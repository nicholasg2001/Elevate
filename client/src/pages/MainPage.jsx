import { useEffect } from "react";
import GoogleSignInModal from "../components/Modals/GoogleSignInModal";
import { openGoogleSetupModal } from "../redux/feats/global/globalSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import WeeklyCaloriesChart from "../components/Main/Charts/WeeklyCaloriesChart";
import WeeklyStepChart from "../components/Main/Charts/WeeklyStepsChart";
import WeeklyWorkoutsChart from "../components/Main/Charts/WeeklyWorkoutsChart";
import CustomToasts from "../components/Toasts/CustomToasts";
import { GiConverseShoe } from "react-icons/gi";
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
      <div className="flex justify-center bg-cyan-500 dark:bg-slate-800 w-screen h-screen">
        <div className="flex flex-col h-full w-3/4 bg-white rounded-xl justify-center">
          <div className="flex gap-4 w-full h-3/4">
            <div className="w-1/2 flex justify-center items-center">
              <WeeklyStepChart />
            </div>
            <div className="flex flex-col w-1/2 gap-10">
              <div className="bg-gradient-to-t from-blue-800 via-blue-500 to-cyan-500 h-1/6 cursor-pointer rounded-xl flex justify-center items-center gap-4">
                <div className="bg-white rounded-xl flex justify-center items-center h-1/2 w-1/4">
                  <GiConverseShoe size={30} />
                </div>
                <span className="text-lg text-white font-bold">
                    Daily Walking
                </span>
              </div>
              <div className="bg-cyan-200 rounded h-3/4">xxx</div>
            </div>
          </div>
        </div>
      </div>
      <GoogleSignInModal />
      <CustomToasts />
    </>
  );
};

export default MainPage;
