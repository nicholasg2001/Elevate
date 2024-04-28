import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useGetAllWorkoutsQuery } from "../../../redux/services/WorkoutService";
import MuscleFilter from "./MuscleFilter";
import TypeFilter from "./TypeFilter";
import DifficultyFilter from "./DifficultyFilter";
const WorkoutsFilter = ({ setMuscleFilter, setTypeFilter, setDifficultyFilter }) => {
  const { data, isLoading } = useGetAllWorkoutsQuery("Workouts");

  const [openDropDown, setOpenDropDown] = useState(false);
  const [isMuscle, setIsMuscle] = useState(false);
  const [isType, setIsType] = useState(false);
  const [isDifficulty, setIsDifficulty] = useState(false);

  const [muscleSelections, setMuscleSelections] = useState({});
  const [muscleCounts, setMuscleCounts] = useState({});

  const [typeSelections, setTypeSelections] = useState({});
  const [typeCounts, setTypeCounts] = useState({});

  const [difficultySelections, setDifficultySelections] = useState({});
  const [difficultyCounts, setDifficultyCounts] = useState({});

  useEffect(() => {
    if (data && !isLoading) {
      const muscleCounts = data.reduce((acc, workout) => {
        acc[workout.muscle] = (acc[workout.muscle] || 0) + 1;
        return acc;
      }, {});
      const typeCounts = data.reduce((acc, workout) => {
        acc[workout.type] = (acc[workout.type] || 0) + 1;
        return acc;
      }, {});
      const difficultyCounts = data.reduce((acc, workout) => {
        acc[workout.difficulty] = (acc[workout.difficulty] || 0) + 1;
        return acc;
      }, {});

      setMuscleCounts(muscleCounts);
      setTypeCounts(typeCounts);
      setDifficultyCounts(difficultyCounts);

      setMuscleFilter(Object.keys(muscleCounts).filter(muscle => muscleSelections[muscle]));
      setTypeFilter(Object.keys(typeCounts).filter(type => typeSelections[type]));
      setDifficultyFilter(Object.keys(difficultyCounts).filter(difficulty => difficultySelections[difficulty]));
    }
  }, [data, isLoading, muscleSelections, typeSelections, difficultySelections, setMuscleFilter, setTypeFilter, setDifficultyFilter]);

  return (
    <div className="hidden absolute right-0 lg:flex flex-col gap-3 items-center justify-center p-4">
      <button
        className="bg-blue-400 dark:bg-purple-300 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={() => setOpenDropDown((prevOpenDropDown) => !prevOpenDropDown)}
      >
        Filter by category
        <IoMdArrowDropdown size={20} />
      </button>
      {openDropDown && (
        <div className="z-10 w-56 p-3 bg-gray-100 rounded-lg shadow dark:bg-gray-700">
          <div>
            <div
              className="flex cursor-pointer"
              onClick={() => setIsMuscle((muscle) => !muscle)}
            >
              <button className="mb-3 text-sm font-medium text-gray-900 dark:text-white inline">
                Muscle
              </button>
              <IoMdArrowDropdown size={20} />
            </div>
            {isMuscle && <MuscleFilter amt={muscleCounts} setMuscleSelections={setMuscleSelections} muscleSelections={muscleSelections} />}
          </div>

          <div>
            <div
              className="flex cursor-pointer"
              onClick={() => setIsType((type) => !type)}
            >
              <button className="mb-3 text-sm font-medium text-gray-900 dark:text-white inline">
                Type
              </button>
              <IoMdArrowDropdown size={20} />
            </div>

            {isType && <TypeFilter amt={typeCounts} setTypeSelections={setTypeSelections} typeSelections={typeSelections} />}
          </div>

          <div>
            <div
              className="flex cursor-pointer"
              onClick={() => setIsDifficulty((difficulty) => !difficulty)}
            >
              <button className="mb-3 text-sm font-medium text-gray-900 dark:text-white inline">
                Difficulty
              </button>
              <IoMdArrowDropdown size={20} />
            </div>

            {isDifficulty && <DifficultyFilter amt={difficultyCounts} setDifficultySelections={setDifficultySelections} difficultySelections={difficultySelections} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutsFilter;
