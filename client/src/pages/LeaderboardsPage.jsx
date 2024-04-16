import { useEffect, useState } from "react";
import { useGetAllUsersQuery } from "../redux/services/UserService";
import { Spinner } from "flowbite-react";
import { PiCrownDuotone } from "react-icons/pi";
import LeaderBoard from "./../components/Leaderboards/LeaderBoard";

const LeaderboardsPage = () => {
  const { data, isLoading } = useGetAllUsersQuery("User");
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [mockFirstPlace, setMockFirstPlace] = useState();
  const [mockSecondPlace, setMockSecondPlace] = useState();
  const [mockThirdPlace, setMockThirdPlace] = useState();

  useEffect(() => {
    if (data && data.length >= 3) {
      setMockFirstPlace(data[0]);
      setMockSecondPlace(data[1]);
      setMockThirdPlace(data[2]);
      setLeaderboardData(data.slice(3));
    } else {
      setMockFirstPlace(null);
      setMockSecondPlace(null);
      setMockThirdPlace(null);
    }
  }, [data, isLoading]);

  return (
    <div className="flex justify-center items-start h-screen w-screen bg-gradient-to-b dark:bg-gradient-to-br from-color7 to-color3 dark:from-darkColor2 dark:to-darkColor1">
      {isLoading ? (
        <Spinner aria-label="Default status example" />
      ) : data && data.length > 0 ? (
        <div className="w-5/6 h-full flex flex-col relative gap-12">
          <h1 className="text-3xl font-bold text-center mb-3 dark:text-white">
            Leaderboards
          </h1>
          <div className="flex h-1/4 items-end relative">
            <div className="bg-blue-200 dark:bg-blue-800 dark:text-white h-3/4 w-1/3 flex flex-col justify-center items-center rounded-xl relative">
              <img
                src={
                  mockSecondPlace
                    ? mockSecondPlace.profileurl
                    : "path/to/placeholder-image.jpg"
                }
                alt="Second Place"
                className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 object-cover"
              />
              <span className="text-3xl">
                {mockSecondPlace ? mockSecondPlace.name : "Loading..."}
              </span>
              <span className="text-2xl">8 days</span>
              <span className="font-bold text-2xl">2nd Place</span>
            </div>
            <div className="bg-yellow-300 dark:bg-amber-400 dark:text-white w-1/3 h-full flex flex-col justify-center items-center rounded-xl relative">
              <div className="relative">
                <PiCrownDuotone
                  className="absolute left-2 bottom-12"
                  size={48}
                />
                <img
                  src={
                    mockFirstPlace
                      ? mockFirstPlace.profileurl
                      : "path/to/placeholder-image.jpg"
                  }
                  alt="First Place"
                  className="rounded-full w-16 h-16 object-cover"
                />
              </div>
              <span className="text-3xl">
                {mockFirstPlace ? mockFirstPlace.name : "Loading..."}
              </span>
              <span className="text-2xl">10 days</span>
              <span className="font-bold text-2xl">1st Place</span>
            </div>

            <div className="bg-green-300 dark:bg-green-800 dark:text-white h-3/4 w-1/3 flex flex-col justify-center items-center rounded-xl relative">
              <img
                src={
                  mockThirdPlace
                    ? mockThirdPlace.profileurl
                    : "path/to/placeholder-image.jpg"
                }
                alt="Third Place"
                className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 object-cover"
              />
              <span className="text-3xl">
                {mockThirdPlace ? mockThirdPlace.name : "Loading..."}{" "}
              </span>

              <span className="text-2xl">5 days</span>
              <span className="font-bold text-2xl">3rd Place</span>
            </div>
          </div>
          <LeaderBoard users={leaderboardData} />
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default LeaderboardsPage;
