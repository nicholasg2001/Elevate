import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiStairsGoal } from "react-icons/gi";

function SettingPage() {
  return (
    <div className="bg-slate-300">
      <Tabs aria-label="Full width tabs" style="fullWidth">
        <Tabs.Item active title="User Info" icon={HiUserCircle}>
          User Info
        </Tabs.Item>
        <Tabs.Item title="Password" icon={RiLockPasswordFill}>
          Password
        </Tabs.Item>
        <Tabs.Item title="Goals" icon={GiStairsGoal}>
          Goals
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default SettingPage;
