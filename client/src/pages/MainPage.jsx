import { useEffect, useState } from "react";
import GoogleSignInModal from "../components/Modals/GoogleSignInModal";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { openGoogleSetupModal } from "../redux/feats/global/globalSlice";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const MainPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const PieData = [
    {
      workout: "Biceps",
      reps: 130,
    },
    {
      workout: "Triceps",
      reps: 100,
    },
    {
      workout: "Legs",
      reps: 300,
    },
    {
      workout: "Abs",
      reps: 200,
    },
  ];
  const [pieChartData, setPieChartData] = useState({
    labels: PieData.map((data) => data.workout),
    datasets: [
      {
        label: "Activities Break Down",
        backgroundColor: [
          "#b87a44",
          "#eeb111",
          "#8cc63f",
          "#569bbe",
          "#247ba0",
          "#34b233",
          "#dc4cdc",
        ],
        data: PieData.map((data) => data.reps),
      },
    ],
  });
  useEffect(() => {
    if (!user.height || !user.weight) {
      dispatch(openGoogleSetupModal());
    }
  }, []);
  return (
    <>
      <div className="flex justify-center bg-cyan-500 w-screen h-screen">
        <div className="flex justify-center h-1/2 w-1/2 bg-white rounded-xl">
          <div className="flex flex-col gap-8">
            <h1 className="text-center text-2xl">Weekly Workouts</h1>
            <Pie data={pieChartData} />
          </div>
        </div>
      </div>
      <GoogleSignInModal />
    </>
  );
};

export default MainPage;
