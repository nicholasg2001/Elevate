import { useRef } from "react";
import { Modal } from "flowbite-react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { closeGoogleSetupModal } from "../../redux/feats/global/globalSlice";
import { useUpdateUserMutation } from "../../redux/services/UserService";
import { toast } from "../../redux/feats/global/globalSlice";
import { updateUserDetails } from "../../redux/feats/auth/authSlice";
const GoogleSignInModal = () => {
  const dispatch = useAppDispatch();
  const { isGoogleSetupModalOpen } = useAppSelector((state) => state.global);
  const { user } = useAppSelector((state) => state.auth);
  const [updateUser] = useUpdateUserMutation();
  const height = useRef(document.createElement("input"));
  const weight = useRef(document.createElement("input"));

  const onInitialSetup = async () => {
    try {
      const result = await updateUser({
        name: user.name,
        email: user.email,
        height: height.current.value,
        weight: weight.current.value,
      });
      dispatch(closeGoogleSetupModal());
      dispatch(toast({ state: true, message: "New account setup!" }));
      dispatch(updateUserDetails(result.updatedUser));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <Modal
      show={isGoogleSetupModalOpen}
      onClose={() => dispatch(closeGoogleSetupModal())}
      size="sm"
      position={"center"}
    >
      <Modal.Header>Welcome to Elevate!</Modal.Header>
      <Modal.Body>
        <div className="flex justify-center gap-4">
          <div>
            <p className="font-poppins text-lg">Height</p>
            <input
              ref={height}
              type="text"
              placeholder="Enter Height"
              className="font-poppins w-full p-2 border border-gray-500 rounded-lg bg-transparent shadow-lg"
            />
          </div>
          <div>
            <p className="font-poppins text-lg">Weight</p>
            <input
              ref={weight}
              type="number"
              placeholder="Enter Weight"
              className="font-poppins w-full p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
            />
          </div>
        </div>
      </Modal.Body>
      <div className=" flex justify-center mb-10">
        <button
          className="flex w-1/3 items-center justify-center px-5 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-30"
          onClick={onInitialSetup}
        >
          Add
        </button>
      </div>
    </Modal>
  );
};

export default GoogleSignInModal;
