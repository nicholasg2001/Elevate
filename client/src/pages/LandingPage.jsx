import LandingPageBox from "../components/landingPage/LandingPageBox";
import LandingNavBar from "../components/LandingNavBar";
import Testimonials from '../components/landingPage/Testimonials';
import AboutUs from '../components/landingPage/AboutUs';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-color7 to-color3">
      <LandingNavBar />
      <div className="flex flex-col justify-center items-center h-full">
        <LandingPageBox />
          <Testimonials />
          {/*<AboutUs />*/}
      </div>
    </div>
  );
};

export default LandingPage;
