import { useState, useRef } from "react";
import { useAppDispatch } from "../../redux/store";
import { toast } from "../../redux/feats/global/globalSlice";
import { useChangePasswordMutation } from "../../redux/services/UserService";
const PasswordTab = () => {
  const currentPasswordRef = useRef(document.createElement("input"));
  const newPasswordRef = useRef(document.createElement("input"));
  const newConfirmedPasswordRef = useRef(document.createElement("input"));

  const [isCurrentPasswordError, setIsCurrentPasswordError] = useState(false);
  const [isNewPasswordError, setIsNewPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [changePassword] = useChangePasswordMutation();

  const dispatch = useAppDispatch();

  const passwordHandler = async () => {
    try {
      await changePassword({
        currentPassword: currentPasswordRef.current.value,
        newPassword: newPasswordRef.current.value,
        confirmNewPassword: newConfirmedPasswordRef.current.value,
      }).unwrap();
      resetForm();
      dispatch(toast({state: true, message: "Password updated successfully."}))
    } catch (error) {
      dispatch(toast({state: true, message:"Password updated failed."}))
      let errorMessage = error.data.error;
      if (errorMessage.includes("Incorrect")) {
        setIsCurrentPasswordError(true);
      }
      if (errorMessage.includes("match")) {
        setIsNewPasswordError(true);
      }
      setErrorMessage(errorMessage);
    }
  };

  const resetForm = () => {
    currentPasswordRef.current.value = "";
    newPasswordRef.current.value = "";
    newConfirmedPasswordRef.current.value = "";
    setErrorMessage("");
    setIsCurrentPasswordError(false);
    setIsCurrentPasswordError(false);
  };

  return (
    <div className="p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-1/2">
      <h3 className="text-lg font-bold text-gray-900 mb-2">User Info</h3>
      <div>
        <label className="font-poppins text-md pb-2">Current Password</label>
        <input
          type="password"
          placeholder="•••••••••"
          className={`font-poppins w-full p-2 border border-gray-500 rounded-lg bg-transparent shadow-lg 
           ${isCurrentPasswordError ? "border-rose-500" : ""}`}
          ref={currentPasswordRef}
        />
        {isCurrentPasswordError && (
          <span className="text-xs text-red-500">{errorMessage}</span>
        )}
      </div>
      <div>
        <label className="font-poppins text-md pb-2">New Password</label>
        <input
          type="password"
          placeholder="•••••••••"
          className={`font-poppins w-full p-2 border border-gray-500 rounded-lg bg-transparent shadow-lg 
           ${isNewPasswordError ? "border-rose-500" : ""}`}
          ref={newPasswordRef}
        />
        {isNewPasswordError && (
          <span className="text-xs text-red-500">{errorMessage}</span>
        )}
      </div>

      <div>
        <label className="font-poppins text-md pb-2">
          Confirm New Password
        </label>
        <input
          type="password"
          placeholder="•••••••••"
          className={`font-poppins w-full p-2 border border-gray-500 rounded-lg bg-transparent shadow-lg 
           ${isNewPasswordError ? "border-rose-500" : ""}`}
          ref={newConfirmedPasswordRef}
        />
        {isNewPasswordError && (
          <span className="text-xs text-red-500">{errorMessage}</span>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="text-lg font-poppins rounded-lg w-1/2 bg-cyan-400 text-white p-2 mt-4 hover:bg-cyan-500"
          onClick={passwordHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PasswordTab;
