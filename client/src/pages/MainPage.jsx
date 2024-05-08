import { useState, useEffect } from "react";
import GoogleSignInModal from "../components/Modals/GoogleSignInModal";
import { openGoogleSetupModal } from "../redux/feats/global/globalSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { FaChartLine } from "react-icons/fa";
import { isAdminUser } from "../components/UniversalUtils";
import WeeklyCaloriesChart from "../components/Main/Charts/WeeklyCaloriesChart";
import WeeklyStepChart from "../components/Main/Charts/WeeklyWaterChart";
import WeeklyWorkoutsChart from "../components/Main/Charts/WeeklyWorkoutsChart";
import CustomToasts from "../components/Toasts/CustomToasts";
import StepsOverview from "../components/Main/StepsOverview";
import BikeOverview from "../components/Main/BikeOverview";
import RunningOverview from "../components/Main/RunningOverview";
import WeekHighlights from "../components/Main/WeekHighlights";

const MainPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const charts = [
    { chart: "water", name: "Weekly Water" },
    { chart: "calories", name: "Weekly Calories" },
    { chart: "workouts", name: "Weekly Workouts" },
  ];
  const [currentChartIndex, setCurrentChartIndex] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  const renderChart = () => {
    switch (charts[currentChartIndex].chart) {
      case "water":
        return <WeeklyStepChart />;
      case "calories":
        return <WeeklyCaloriesChart />;
      case "workouts":
        return <WeeklyWorkoutsChart />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (!user.height || !user.weight) {
      dispatch(openGoogleSetupModal());
    }
    setIsAdmin(isAdminUser(user));
  }, []);
  return (
    <>
      <div className="flex justify-center bg-gradient-to-b from-color7 to-color3 dark:from-darkColor1 dark:to-darkColor2 w-screen h-screen">
        <div className="flex flex-col h-full w-full md:w-3/4 bg-gray-200 dark:bg-gray-700 md:rounded-xl justify-center px-10 gap-10">
          <h1 className="text-5xl font-bold ml-4 dark:text-white font-poppins text-center md:text-left">
            Weekly Report
          </h1>
          <div className="flex gap-4 md:gap-10 lg:gap-14 w-full h-1/2">
            <div className="md:w-3/4 w-1/2 flex justify-center items-center bg-white rounded-lg">
              {isAdmin ? (
                renderChart()
              ) : (
                <div className="text-3xl">Not enough data!</div>
              )}
            </div>
            <div className="flex flex-col md:w-1/4 w-1/2 gap-10">
              <div
                className="bg-gradient-to-t from-blue-800 via-blue-500 to-cyan-500 dark:from-darkColor1 dark:to-darkColor2 h-1/6 cursor-pointer rounded-xl flex justify-center items-center gap-4"
                onClick={() =>
                  setCurrentChartIndex(
                    (prevIndex) => (prevIndex + 1) % charts.length
                  )
                }
              >
                <div className="bg-white rounded-xl md:flex justify-center items-center h-1/2 w-1/4 hidden">
                  <FaChartLine size={30} />
                </div>
                <span className="text-lg text-white font-bold">
                  {charts[currentChartIndex].name}
                </span>
              </div>
              <WeekHighlights isAdmin={isAdmin} />
            </div>
          </div>
          <div className="flex md:gap-10 gap-2 h-1/4">
            <BikeOverview isAdmin={isAdmin} />
            <RunningOverview isAdmin={isAdmin} />
            <StepsOverview isAdmin={isAdmin} />
          </div>
        </div>
      </div>
      <GoogleSignInModal />
      <CustomToasts />
    </>
  );
};

export default MainPage;
