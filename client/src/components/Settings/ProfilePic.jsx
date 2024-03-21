import { useState, useRef } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { useChangeProfilePictureMutation } from "../../redux/services/UserService";
import { Spinner } from "flowbite-react";
import { updateUserDetails } from "../../redux/feats/auth/authSlice";
import { useAppSelector, useAppDispatch } from './../../redux/store';
import { toast } from "../../redux/feats/global/globalSlice";
const ProfilePic = ({ picture }) => {
  const [imageURL, setImageURL] = useState(picture);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [changeProfilePicture] = useChangeProfilePictureMutation();

  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleProfilePicClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setIsLoading(true);
      try {
        const request = await changeProfilePicture({
          file: selectedFile,
        }).unwrap();
        const updatedUser = {
          ...user,
          profileurl: request.profileURL,
        };
        dispatch(updateUserDetails(updatedUser));
        setImageURL(request.profileURL);
        dispatch(toast({ state: true, message: "successfully changed profile picture" }));
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div
      className="relative cursor-pointer"
      onClick={handleProfilePicClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-75">
          <AiTwotoneEdit
            className="rounded-full p-1 text-2xl text-white"
            size={40}
          />
        </div>
      )}

      {isLoading ? (
        <div className="flex h-24 w-24 items-center justify-center rounded-full border dark:border-gray-700 dark:bg-gray-500">
          <Spinner aria-label="Profile loading spinner" size="xl" />
        </div>
      ) : (
        <img
          alt=""
          className="h-24 w-24 rounded-full border dark:border-gray-700 dark:bg-gray-500"
          src={imageURL}
        />
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ProfilePic;
