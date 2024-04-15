import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/feats/auth/authActions";
import { useGoogleLogin } from "@react-oauth/google";
import { googleSignIn } from "../../redux/feats/auth/authActions";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const manualSignUp = async () => {
    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }
    const newUser = {
      name: name,
      email: email,
      password: password,
      weight: weight,
      height: height,
    };
    try {
      await dispatch(registerUser(newUser)).unwrap();
      navigate("/auth/main");
    } catch (error) {
      let errorMessage = error.response.data.error;
      setEmailError(errorMessage);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      try {
        dispatch(googleSignIn(code));
        navigate("/auth/main");
      } catch (error) {
        console.log("Error dispatching Google Sign-In action:", error);
      }
    },
    onError: (error) => {
      console.log(error);
    },
    flow: "auth-code",
  });

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <p className="text-white font-poppins text-l pb-2">Full Name</p>
      <input
        type="text"
        placeholder="John Doe"
        className="text-white placeholder-white font-poppins w-full p-2 mb-2 border border-gray-500 rounded-lg bg-transparent shadow-lg"
        onChange={(event) => setName(event.target.value)}
      />
      <p className="text-white font-poppins text-l mt-2 pb-2">Email</p>
      <input
        type="email"
        placeholder="Enter your email"
        className={`text-white placeholder-white font-poppins w-full p-2 mb-2 border border-gray-500 rounded-lg bg-transparent shadow-lg${
          emailError ? " border-rose-500" : ""
        }`}
        onChange={(event) => setEmail(event.target.value)}
      />
      {emailError && <span className="text-xs text-red-500 ml-2">{emailError}</span>}
      <p className="text-white font-poppins text-l mt-2 pb-2">Password</p>
      <input
        type="password"
        placeholder="Enter your password"
        className={`text-white placeholder-white font-poppins w-full p-2 mb-2 border border-gray-500 rounded-lg bg-transparent shadow-lg ${
          passwordError ? " border-rose-500" : " border-gray-500"
        }`}
        onChange={(event) => setPassword(event.target.value)}
      />
      {passwordError && (
        <span className="text-xs text-red-500 ml-2">
          Password and confirm password don't match
        </span>
      )}
      <p className="text-white font-poppins text-l mt-2 pb-2">Confirm Password</p>
      <input
        type="password"
        placeholder="Confirm password"
        className={`text-white placeholder-white font-poppins w-full p-2 mb-2 border border-gray-500 rounded-lg bg-transparent shadow-lg${
          passwordError ? " border-rose-500" : " border-gray-500"
        }`}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <div className="flex justify-between mt-2">
        <div className="w-1/2 pr-2">
          <p className="text-white font-poppins text-l mt-2 pb-2">Height</p>
          <input
            type="text"
            placeholder="Height"
            className="text-white placeholder-white font-poppins w-full p-2 border border-gray-500 rounded-lg bg-transparent shadow-lg"
            onChange={(event) => setHeight(event.target.value)}
          />
        </div>
        <div className="w-1/2 pl-2">
          <p className="text-white font-poppins text-l mt-2 pb-2">Weight</p>
          <input
            type="number"
            placeholder="Enter Weight"
            className="text-white placeholder-white font-poppins w-full p-2 border border-gray-500 rounded-lg bg-transparent shadow-lg"
            onChange={(event) => setWeight(event.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="mr-2"
          />
          <label className="text-white font-poppins text-sm" htmlFor="remember">
            Remember me
          </label>
        </div>
        <a href="#" className="text-white font-poppins text-sm">
          Forgot password
        </a>
      </div>
      <button
        onClick={manualSignUp}
        className="text-lg font-poppins rounded-lg w-full bg-blue-600 text-white p-2 mt-4 hover:bg-blue-500"
      >
        Sign up!
      </button>
      <button
        className="py-3.5 px-4 border rounded-lg border-gray-700 flex justify-center items-center w-full mt-2 hover:shadow-xl"
        onClick={googleLogin}
      >
        <FcGoogle size={24} />
        <p className="text-white font-poppins text-lg ml-2">
          Login with Google
        </p>
      </button>
    </div>
  );
};

export default SignupForm;
