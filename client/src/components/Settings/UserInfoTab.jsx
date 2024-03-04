/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUpdateUserMutation } from "../../redux/services/UserService";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { toast } from "../../redux/feats/global/globalSlice";
import { updateUserDetails } from "../../redux/feats/auth/authSlice";

const UserInfoTab = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [height, setHeight] = useState(user.height);
  const [weight, setWeight] = useState(user.weight);
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useAppDispatch();

  const formHandler = async (event) => {
    event.preventDefault();
    try {
      const result = await updateUser({
        name: name,
        email: email,
        height: height,
        weight: weight,
      }).unwrap();
      dispatch(toast({ state: true, message: "Settings updated successfully." }))
      dispatch(updateUserDetails(result.updatedUser));
    } catch (error) {
      console.error("Error updating user:", error);
      dispatch(toast({ state: true, message: "Settings updated failed." }))
    }
  };
  return (
    <div className="p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-1/2">
      <h3 className="text-lg font-bold text-gray-900 mb-2">User Info</h3>
      <form onSubmit={formHandler}>
        <div className="flex justify-center gap-4">
          <div className="w-1/2">
            <label className="font-poppins text-md pb-2">Full Name</label>
            <input
              type="text"
              placeholder={user.name}
              className="font-poppins w-full p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="w-1/2">
            <label className="font-poppins text-md pb-2">Email</label>
            <input
              type="email"
              placeholder={user.email}
              className="font-poppins w-full p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div className="w-1/2">
            <label className="font-poppins text-md pb-2">Height</label>
            <input
              type="text"
              placeholder={user.height}
              className="font-poppins w-full p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div className="w-1/2">
            <label className="font-poppins text-md pb-2">Weight</label>
            <input
              type="number"
              placeholder={user.weight}
              className="font-poppins w-full p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-lg font-poppins rounded-lg w-1/2 bg-green-600 text-white p-2 mt-4 hover:bg-green-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoTab;
