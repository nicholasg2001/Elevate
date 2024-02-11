import { useState, useEffect } from "react";
import SignupForm from "../components/SignupForm";
import loginModel from "/src/assets/loginmodel.png";

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
    <div className="h-screen bg-gradient-to-b from-color4 to-gray-400 flex justify-center">
      <div className="h-full w-4/5 flex gap-10 justify-center items-center rounded-xl">
        <div className="p-8 xl:w-1/3 sm:w-2/3 w-full">
          <h1 className="text-white font-poppins text-5xl md:text-6xl font-bold mb-2 pb-8 text-center">
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
  );
};

export default SignupPage;
