import { useState } from "react";
import CustomToasts from "../components/Toasts/CustomToasts";
import Tab from "../components/Settings/Tab";
import UserInfoTab from "../components/Settings/UserInfoTab";
import PasswordTab from "../components/Settings/PasswordTab";
import GoalsTab from "../components/Settings/GoalsTab";
import FavoritedWorkoutsTab from "../components/Settings/FavoritedWorkoutsTab";

const SettingPage = () => {
  const [currentTab, setCurrentTab] = useState("UserInfo");
  const tabHandler = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-b dark:bg-gradient-to-tr from-color7 to-color3 dark:from-darkColor1 dark:to-darkColor2 p-4">
      <div className="flex gap-4 justify-center z-10 dark:text-white">
        <Tab getTab={tabHandler} activeTab={currentTab} />
        {currentTab === "UserInfo" && <UserInfoTab />}
        {currentTab === "Password" && <PasswordTab />}
        {currentTab === "Favorites" && <FavoritedWorkoutsTab />}
        {currentTab === "Goals" && <GoalsTab />}
      </div>
      <CustomToasts className="mx-auto" />
    </div>
  );
};

export default SettingPage;
