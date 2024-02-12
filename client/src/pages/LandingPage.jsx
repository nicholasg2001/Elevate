import LandingPageBox from "../components/landingPage/LandingPageBox";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-color7 to-color3">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full">
        <LandingPageBox />
      </div>
    </div>
  );
};

export default LandingPage;
