import { Dropdown, Navbar } from "flowbite-react";
import { useAppSelector } from "../redux/store";
import { useAppDispatch } from "../redux/store";
import { RiAccountCircleFill } from "react-icons/ri";
import { logout } from "../redux/feats/auth/authSlice";
import { Link } from "react-router-dom";
import elevateLogo from "/src/assets/logo.png";
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
          label={
            // <Avatar
            //   alt="User settings"
            //   img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            //   rounded
            // />
            <RiAccountCircleFill
              size={40}
              color="disabled"
              style={{ color: "white" }}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user.name}</span>
            <span className="block truncate text-sm font-medium">
              {user.email}
            </span>
          </Dropdown.Header>

          <Link to={"/auth/dashboard"}>
            <Dropdown.Item className="font-poppins text-black">
              {" "}
              Dashboard{" "}
            </Dropdown.Item>
          </Link>
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
          <Navbar.Link className="font-poppins text-white text-2xl md:hover:text-blue-800">
            Exercises
          </Navbar.Link>
        </Link>

        <Link to="/auth/foods">
          <Navbar.Link className="font-poppins text-white text-2xl md:hover:text-blue-800">
            Foods
          </Navbar.Link>
        </Link>

        <Link to="/auth/trainers">
          <Navbar.Link className="font-poppins text-white text-2xl md:hover:text-blue-800">
            Trainers
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AuthNavBar;
