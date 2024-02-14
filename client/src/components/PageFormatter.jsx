import { Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/store";
const PageFormatter = () => {
  const { user } = useAppSelector((state) => state.auth);
  if (Object.keys(user).length === 0) {
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
      <Outlet />
    </>
  );
};

export default PageFormatter;
