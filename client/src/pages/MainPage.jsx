import { useAppSelector } from "../redux/store";
const MainPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
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
  );
};

export default MainPage;
