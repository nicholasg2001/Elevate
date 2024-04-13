import { useState, useEffect } from "react";
import loginModel from "/src/assets/loginmodel.png";
import SignupForm from "../components/Auth/SignupForm";
import Toggle from "../components/Toggle";

const SignupPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-screen bg-gradient-to-b from-color4 to-gray-400 dark:from-darkColor2 dark:to-darkColor1">
      <div className="mt-10 mr-10">
        <Toggle />
      </div>
      <div className="flex-grow flex justify-center items-center">
        <div className="w-full md:w-4/5 flex flex-col md:flex-row gap-10 justify-center items-center overflow-hidden">
          <div className="p-8 xl:w-2/5 sm:w-3/5 w-full">
            <h1 className="text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center">
              Sign up
            </h1>
            <SignupForm />
            <p className="text-white font-poppins text-center mt-4">
              Already have an account?
              <a href="/login" className="font-poppins pl-1 text-red-600">
                Login here!
              </a>
            </p>
          </div>
          {width > 768 && (
            <img
              src={loginModel}
              alt="loginModel"
              className="xl:w-1/2 w-2/5 h-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
