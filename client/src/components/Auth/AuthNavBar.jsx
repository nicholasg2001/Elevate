import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { useAppSelector } from "../../redux/store";
import { useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/feats/auth/authSlice";
import { Link } from "react-router-dom";
import elevateLogo from "/src/assets/logo.png";
import Toggle from "../Toggle";
const AuthNavBar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <Navbar fluid rounded className="bg-color7 ">
      <Navbar.Brand href={"logo"}>
        <Link to="/auth/main">
          <img
            src={elevateLogo}
            className="mr-3 h-6 sm:h-9"
            alt="Elevate Logo"
          />
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={user.profileurl} rounded />}
        >
          <Dropdown.Header className="flex flex-col gap-2">
            <div>
              <span className="block text-sm">{user.name}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </div>
            <div className="flex justify-center">
              <Toggle />
            </div>
          </Dropdown.Header>
          <Link to={"/auth/setting"}>
            <Dropdown.Item className="font-poppins text-black">
              Settings
            </Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Link to={"/"} onClick={() => dispatch(logout())}>
            <Dropdown.Item className="font-poppins text-black">
              {" "}
              Sign Out{" "}
            </Dropdown.Item>
          </Link>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/auth/exercises">
          <Navbar.Link className="font-poppins text-white hover:text-black text-2xl md:hover:text-blue-800">
            Exercises
          </Navbar.Link>
        </Link>

        <Link to="/auth/foods">
          <Navbar.Link className="font-poppins text-white hover:text-black text-2xl md:hover:text-blue-800">
            Foods
          </Navbar.Link>
        </Link>

        <Link to="/auth/leaderboard">
          <Navbar.Link className="font-poppins text-white hover:text-black text-2xl md:hover:text-blue-800">
            Leaderboard
          </Navbar.Link>
        </Link>

        <Link to="/auth/maps">
          <Navbar.Link className="font-poppins text-white hover:text-black text-2xl md:hover:text-blue-800">
            Find a gym
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AuthNavBar;
