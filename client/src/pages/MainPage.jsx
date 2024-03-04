import { useEffect } from "react";
import GoogleSignInModal from "../components/Modals/GoogleSignInModal";
import { useAppDispatch, useAppSelector } from "../redux/store";
import WeeklyCaloriesChart from "../components/Main/Charts/WeeklyCaloriesChart";
import WeeklyWorkoutsChart from "../components/Main/Charts/WeeklyWorkoutsChart";
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
      <div className="flex justify-center bg-cyan-500 w-screen h-screen">
        <div className="flex justify-center h-1/2 w-1/2 bg-white rounded-xl items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-center text-2xl">Weekly Workouts</h1>
            <WeeklyWorkoutsChart />
          </div>
          <div>
            <h1 className="text-center text-2xl">Weekly Calories</h1>
            <WeeklyCaloriesChart />
          </div>
        </div>
      </div>
      <GoogleSignInModal />
    </>
  );
};

export default MainPage;
