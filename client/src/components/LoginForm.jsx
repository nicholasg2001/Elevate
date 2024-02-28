import { useState } from "react";
import { loginUser } from "../redux/feats/auth/authActions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { useGoogleLogin } from "@react-oauth/google";
import { googleSignIn } from "../redux/feats/auth/authActions";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const manualLogin = async () => {
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      navigate("/auth/main");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        let errorMessage = error.response.data.error;
        if (errorMessage.includes("Email")) {
          setEmailError(true);
          setEmailErrorMessage(errorMessage);
        } else {
          setEmailError(false);
        }
        if (errorMessage.includes("password")) {
          setPasswordError(true);
          setPasswordErrorMessage(errorMessage);
        }
      }
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
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        className={`text-white placeholder-white font-poppins w-full p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg
            ${emailError ? "border-rose-500" : ""}
        `}
        onChange={(event) => setEmail(event.target.value)}
      />
      {emailError && (
        <span className="text-xs text-red-500">{emailErrorMessage}</span>
      )}

      <p className="text-white font-poppins text-l mt-4 pb-2">Password</p>
      <input
        type="password"
        placeholder="Enter your password"
        className={`text-white placeholder-white font-poppins w-full p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg
            ${passwordError ? "border-rose-500" : ""}
        `}
        onChange={(event) => setPassword(event.target.value)}
      />
      {passwordError && (
        <span className="text-xs text-red-500">{passwordErrorMessage}</span>
      )}
      <div className="flex justify-between items-center">
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
        <a href="#" className="text-white font-poppins">
          Forgot password
        </a>
      </div>
      <button
        onClick={manualLogin}
        className="text-lg font-poppins rounded-lg w-full bg-blue-600 text-white p-2 mt-4 hover:bg-blue-500"
      >
        Login
      </button>
      <button
        onClick={googleLogin}
        className="py-3.5 px-4 border rounded-lg border-gray-700 flex justify-center items-center w-full mt-4 hover:shadow-xl"
      >
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
            fill="#4285F4"
          />
          <path
            d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
            fill="#34A853"
          />
          <path
            d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
            fill="#FBBC05"
          />
          <path
            d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
            fill="#EB4335"
          />
        </svg>
        <p className="text-white font-poppins text-lg ml-4">
          Login with Google
        </p>
      </button>
    </div>
  );
};

export default LoginForm;
