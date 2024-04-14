import { HiUserCircle } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiStairsGoal } from "react-icons/gi";
const Tab = (props) => {
  return (
    <ul className="flex-column w-32 space-y space-y-4 text-sm font-medium md:me-4 mb-4 md:mb-0">
      <li>
        <div
          className={`inline-flex items-center px-4 py-3 rounded-lg w-full border cursor-pointer ${
            props.activeTab === "UserInfo" && "bg-blue-600 dark:bg-purple-400 border-none text-white"
            }`}
          onClick={() => props.getTab("UserInfo")}
        >
          <HiUserCircle size={20} />
          User Info
        </div>
      </li>
      <li>
        <div
          className={`inline-flex items-center px-4 py-3 rounded-lg w-full border cursor-pointer ${
            props.activeTab === "Password" && "bg-blue-600 dark:bg-purple-400 border-none text-white"
            }`}
          onClick={() => props.getTab("Password")}
        >
          <RiLockPasswordFill size={20} />
          Password
        </div>
      </li>
      <li>
        <div
          className={`inline-flex items-center px-4 py-3 rounded-lg w-full border cursor-pointer ${
            props.activeTab === "Goals" && "bg-blue-600 dark:bg-purple-400 border-none text-white"
            }`}
          onClick={() => props.getTab("Goals")}
        >
          <GiStairsGoal size={20} />
          Goals
        </div>
      </li>
    </ul>
  );
};

export default Tab;
