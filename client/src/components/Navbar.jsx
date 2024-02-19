import { Link } from "react-router-dom";
import elevateLogo from "/src/assets/logo.png";
import { useAppSelector } from "../redux/store";
import { Dropdown } from "flowbite-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <nav className="bg-color7 border-b border-gray-400 pt-12 pb-6">
      <div className="flex justify-between pl-12 pr-10 py-2">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={elevateLogo} className="w-auto" alt="Elevate Logo" />
        </Link>
        <ul className="flex flex-row font-medium space-x-12 items-center overflow-x-auto max-w-full">
          <li>
            <Link to="/" className="font-poppins text-white text-2xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/exercises" className="font-poppins text-white text-2xl">
              Exercises
            </Link>
          </li>
          <li>
            <Link to="/trainers" className="font-poppins text-white text-2xl">
              Trainers
            </Link>
          </li>
          {user != null ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <AccountCircleIcon
                  fontSize="large"
                  color="disabled"
                  style={{ color: "white" }}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm text-black">{user.name}</span>
                <span className="font-poppins block truncate text-black text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item className="font-poppins text-black">
                Dashboard
              </Dropdown.Item>
              <Link to={"/auth/setting"} className="text-black">
                <Dropdown.Item className="font-poppins">Settings</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item className="font-poppins text-black">
                Sign Out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <>
              <li>
                <button className="text-xl text-white font-poppins bg-gradient-to-r from-blue-500 to-blue-700 overflow-hidden hover:from-blue-600 hover:to-blue-800 py-3 px-6 rounded-full transform transition-all duration-500 ease-in-out hover:brightness-110 hover:animate-pulse">
                  <Link to="/login" className="font-poppins text-white text-xl">
                    Login
                  </Link>
                </button>
              </li>
              <li>
                <button className="text-xl text-white font-poppins bg-gradient-to-r from-blue-500 to-blue-700 overflow-hidden hover:from-blue-600 hover:to-blue-800 py-3 px-6 rounded-full transform transition-all duration-500 ease-in-out hover:brightness-110 hover:animate-pulse">
                  <Link
                    to="/signup"
                    className="font-poppins text-white text-xl"
                  >
                    Sign up
                  </Link>
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
