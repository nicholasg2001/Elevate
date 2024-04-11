import { useGetAllUsersQuery } from '../redux/services/UserService';
import { Spinner } from "flowbite-react";
import LeaderBoard from './../components/Leaderboards/LeaderBoard';

const LeaderboardsPage = () => {
  const { data, isLoading } = useGetAllUsersQuery("User");

  return (
    <div className="flex justify-center items-start h-screen w-screen bg-gradient-to-b from-color7 to-color3">
      {data ? (
        <div className='w-5/6 flex justify-center flex-col'>
          <h1 className="text-3xl font-bold text-center mb-3">Leaderboards</h1>
          <LeaderBoard users={data} />
        </div>
      ) : isLoading ? (
        <Spinner aria-label="Default status example" />
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default LeaderboardsPage;
