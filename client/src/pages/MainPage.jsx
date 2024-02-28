import { useEffect } from "react";
import GoogleSignInModal from "../components/Modals/GoogleSignInModal";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { openGoogleSetupModal } from "../redux/feats/global/globalSlice";

const MainPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!user.height || !user.weight) {
      dispatch(openGoogleSetupModal());
    }
  }, []);
  return (
    <>
      <div className="flex justify-center bg-cyan-500 w-screen h-screen">
        <div className="flex justify-center h-1/2 w-1/2  bg-white rounded-xl">
          <div className="flex justify-center flex-col">
            <p>ID: {user.user_id}</p>
            <p>Email: {user.email}</p>
            <p>Height: {user.height}</p>
            <p>Weight: {user.weight}</p>
          </div>
        </div>
      </div>
      <GoogleSignInModal />
    </>
  );
};

export default MainPage;
