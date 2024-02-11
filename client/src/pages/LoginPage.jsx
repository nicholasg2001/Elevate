import loginModel from "/src/assets/loginmodel.png";
import LoginForm from "/src/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-color4 to-gray-400 h-screen flex justify-center items-center">
      <div className="h-2/3 w-2/3 flex justify-center items-center rounded-xl">
        <div className="p-8 rounded">
          <h1 className="text-white font-poppins text-6xl font-bold mb-2 pb-8">
            Welcome Back!
          </h1>
          <p className="text-white font-poppins text-xl mb-6">
            Please enter your login information
          </p>
          <p className="text-white font-poppins text-l pb-2">Email</p>

          <LoginForm />

          <p className="text-white font-poppins text-center mt-4">
            Don&apos;t have an account?
            <a href="/signup" className="font-poppins pl-1 text-red-600">
              Sign up here!
            </a>
          </p>
        </div>
        <img src={loginModel} alt="loginModel" className="w-1/2 h-auto"></img>
      </div>
    </div>
  );
};

export default LoginPage;
