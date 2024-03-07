import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PageFormatter from "./components/PageFormatter";
import MainPage from "./pages/MainPage";
import SettingPage from "./pages/SettingPage";
import WorkoutPage from "./pages/WorkoutPage";
import DetailedWorkoutPage from "./pages/DetailedWorkoutPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/auth" element={<PageFormatter />}>
          <Route path="main" element={<MainPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="exercises" element={<WorkoutPage />} />
          <Route path="detailedWorkout" element={<DetailedWorkoutPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
