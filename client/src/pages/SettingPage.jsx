import { useState } from "react";
import Tab from "../components/Settings/Tab";
import UserTab from "../components/Settings/UserTab";
import PasswordTab from "../components/Settings/PasswordTab";
import GoalsTab from "../components/Settings/GoalsTab";

const SettingPage = () => {
  const [currentTab, setCurrentTab] = useState("Profile");
  const tabHandler = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="h-screen w-screen bg-cyan-400">
      <div className="flex gap-4">
        <Tab getTab={tabHandler} activeTab={currentTab} />
        {currentTab === "User" && <UserTab />}
        {currentTab === "Password" && <PasswordTab />}
        {currentTab === "Goals" && <GoalsTab />}
      </div>
    </div>
  );
};

export default SettingPage;
