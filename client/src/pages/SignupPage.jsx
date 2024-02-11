import SignupForm from "../components/SignupForm";
import loginModel from "/src/assets/loginmodel.png";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-color4 to-gray-400 h-screen flex justify-center items-center">
      <div className="h-2/3 w-2/3 flex justify-center items-center rounded-xl">
        <div className="p-8 rounded">
          <h1 className="text-white font-poppins text-6xl font-bold mb-2 pb-8">
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
        <img src={loginModel} alt="loginModel" className="w-1/2 h-auto"></img>
      </div>
    </div>
  );
};

export default SignupPage;
