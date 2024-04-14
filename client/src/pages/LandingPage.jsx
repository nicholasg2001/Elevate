import LandingPageBox from "../components/landingPage/LandingPageBox";
import LandingNavBar from '../components/landingPage/LandingNavBar';
import Testimonials from '../components/landingPage/Testimonials';
import AboutUs from '../components/landingPage/AboutUs';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-color7 to-color3 dark:from-darkColor1 dark:to-darkColor2">
      <LandingNavBar />
      <div className="flex flex-col gap-24 justify-center items-center h-full">
        <LandingPageBox />
        <div className="w-5/6">
          <Testimonials id="testimonials" />
          <AboutUs id="aboutus" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
