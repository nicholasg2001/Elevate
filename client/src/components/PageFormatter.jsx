import { Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import WorkoutModal from "./Modals/WorkoutModal";
const PageFormatter = () => {
  const { user } = useAppSelector((state) => state.auth);
  if (user == null) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <span>
          <NavLink to="/login">Login</NavLink> to gain access
        </span>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <WorkoutModal/>
    </>
  );
};

export default PageFormatter;
