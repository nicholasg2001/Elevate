import WorkoutCard from "../components/Workouts/WorkoutCard";
import Legs from "/src/assets/workouts/legs.png";
import Abs from "/src/assets/workouts/abs.png";
import Cardio from "/src/assets/workouts/cardio.png";
import Arms from "/src/assets/workouts/arms.png";

const WorkoutPage = () => {
  return (
    <>
      <div className=" flex gap-5 justify-center mt-4">
        <form className="w-full lg:w-1/2 mx-4 lg:mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 :bg-gray-700"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="container mx-auto p-4 lg:p-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {/* Once we have API setup, replace Workout object as a prop*/}
          {/* Data transformation with difficulty colors, img enum etc. */}
          <WorkoutCard
            name="Single Leg Press"
            img={Legs}
            muscle={"Legs"}
            difficulty={"Easy"}
            type={"Strength"}
          />
          <WorkoutCard
            name="Lateral Hop"
            img={Abs}
            muscle={"Abs"}
            difficulty={"Medium"}
            type={"Strength"}
          />
          <WorkoutCard
            name="Running"
            img={Cardio}
            muscle={"Cardio"}
            difficulty={"Easy"}
            type={"Strength"}
          />
          <WorkoutCard
            name="Biking"
            img={Cardio}
            muscle={"Cardio"}
            difficulty={"Easy"}
            type={"Strength"}
          />
          <WorkoutCard
            name="Barbell Curl"
            img={Arms}
            muscle={"Arms"}
            difficulty={"Easy"}
            type={"Strength"}
          />
          <WorkoutCard
            name="DeadLifts"
            img={Legs}
            muscle={"Legs"}
            difficulty={"Easy"}
            type={"Strength"}
          />
        </div>
      </div>
    </>
  );
};

export default WorkoutPage;
