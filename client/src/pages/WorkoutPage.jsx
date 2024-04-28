import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import WorkoutsContainer from "../components/Workouts/WorkoutsContainer";
import WorkoutsFilter from "../components/Workouts/filter/WorkoutsFilter";
import CustomToasts from "../components/Toasts/CustomToasts";

const WorkoutPage = () => {
  const [workoutSearch, setWorkoutSearch] = useState("");
  const [muscleFilter, setMuscleFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [difficultyFilter, setDifficultyFilter] = useState(null);

  return (
    <div className="flex flex-col min-h-screen min-w-screen dark:bg-slate-700">
      <div className="flex justify-center p-4">
        <div className="w-full lg:w-1/2 mx-4 lg:mx-auto mt-4">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <CiSearch size={20} />
            </div>
            <input
              type="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Workouts"
              onChange={(e) => setWorkoutSearch(e.target.value)}
              required
            />
          </div>
        </div>
        <WorkoutsFilter
          setMuscleFilter={setMuscleFilter}
          setTypeFilter={setTypeFilter}
          setDifficultyFilter={setDifficultyFilter}
        />
      </div>
      <div className="flex-grow">
        <WorkoutsContainer
          search={workoutSearch}
          muscleFilter={muscleFilter}
          typeFilter={typeFilter}
          difficultyFilter={difficultyFilter}
        />
      </div>
      <CustomToasts />
    </div>
  );
};

export default WorkoutPage;
