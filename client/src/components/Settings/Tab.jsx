import { HiUserCircle } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiStairsGoal } from "react-icons/gi";
const Tab = (props) => {
  return (
    <>
      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
          <div
            className={`inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600 cursor-pointer`}
            onClick={() => props.getTab("User")}
          >
            <HiUserCircle size={20} />
            Profile
          </div>
        </li>
        <li>
          <div
            className={`inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}
            onClick={() => props.getTab("Password")}
          >
            <RiLockPasswordFill size={20} />
            Password
          </div>
        </li>
        <li>
          <div
            className={`inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}
            onClick={() => props.getTab("Goals")}
          >
            <GiStairsGoal size={20} />
            Goals
          </div>
        </li>
      </ul>
    </>
  );
};

export default Tab;
