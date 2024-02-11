import { useState, useEffect } from "react";
import loginModel from "/src/assets/loginmodel.png";
import LoginForm from "/src/components/LoginForm";

const LoginPage = () => {
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
    <div className="h-screen w-screen bg-gradient-to-b from-color4 to-gray-400 flex justify-center items-center">
      <div className="h-2/3 w-5/6 flex justify-center items-center">
        <div className="p-8 rounded">
          <h1 className="text-white font-poppins text-6xl font-bold mb-2 pb-8">
            Welcome Back!
          </h1>
          <p className="text-white font-poppins text-xl mb-6">
            Please enter your login information
          </p>

          <LoginForm />

          <p className="text-white font-poppins text-center mt-4">
            Don&apos;t have an account?
            <a href="/signup" className="font-poppins pl-1 text-red-600">
              Sign up here!
            </a>
          </p>
        </div>
        {width >= 1024 && (
          <img src={loginModel} alt="loginModel" className="w-1/2 h-auto" />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
