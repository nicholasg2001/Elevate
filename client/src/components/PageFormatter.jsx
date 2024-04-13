import { Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { NavLink } from "react-router-dom";
import AuthNavBar from "./Auth/AuthNavBar";
import Toggle from "./Toggle";
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
      <AuthNavBar />
      <Toggle />
      <Outlet />
    </>
  );
};

export default PageFormatter;
