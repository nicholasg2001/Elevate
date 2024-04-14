import { useState, useMemo } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useGetAllWorkoutsQuery } from "../../../redux/services/WorkoutService";
import MuscleFilter from "./MuscleFilter";
import TypeFilter from "./TypeFilter";
import DifficultyFilter from "./DifficultyFilter";
const WorkoutsFilter = () => {
  const { data, isLoading } = useGetAllWorkoutsQuery("Workouts");
  const [openDropDown, setOpenDropDown] = useState(false);
  const [isDifficulty, setIsDifficulty] = useState(false);
  const [isType, setIsType] = useState(false);
  const [isMuscle, setIsMuscle] = useState(false);

  const [muscleCount, setMuscleCount] = useState({});
  const [typeCount, setTypeCount] = useState({});
  const [difficultyCount, setDifficultyCount] = useState({});

  useMemo(() => {
    if (data && !isLoading) {
      setMuscleCount({
        abdominals: data.filter((workout) => workout.muscle === "abdominals").length,
        Abductors: data.filter((workout) => workout.muscle === "abductors").length,
        adductors: data.filter((workout) => workout.muscle === "adductors").length,
        biceps: data.filter((workout) => workout.muscle === "biceps").length,
        calves: data.filter((workout) => workout.muscle === "calves").length,
        chest: data.filter((workout) => workout.muscle === "chest").length,
        forearms: data.filter((workout) => workout.muscle === "forearms").length,
        glutes: data.filter((workout) => workout.muscle === "glutes").length,
        hamstrings: data.filter((workout) => workout.muscle === "hamstrings").length,
        lats: data.filter((workout) => workout.muscle === "lats").length,
        lowerBack: data.filter((workout) => workout.muscle === "lower_back").length,
        middleBack: data.filter((workout) => workout.muscle === "middle_back").length,
        neck: data.filter((workout) => workout.muscle === "neck").length,
        quadriceps: data.filter((workout) => workout.muscle === "quadriceps").length,
        traps: data.filter((workout) => workout.muscle === "traps").length,
        triceps: data.filter((workout) => workout.muscle === "triceps").length,
      });

      setTypeCount({
        cardio: data.filter((workout) => workout.type === "cardio").length,
        olympicWeightlifting: data.filter((workout) => workout.type === "olympic_weightlifting").length,
        plyometrics: data.filter((workout) => workout.type === "plyometrics").length,
        powerLifting: data.filter((workout) => workout.type === "powerlifting").length,
        strength: data.filter((workout) => workout.type === "strength").length,
        stretching: data.filter((workout) => workout.type === "stretching").length,
        strongMan: data.filter((workout) => workout.type === "strongman").length,
      })

      setDifficultyCount({
        beginner: data.filter((workout) => workout.difficulty === "beginner").length,
        intermediate: data.filter((workout) => workout.difficulty === "intermediate").length,
        expert: data.filter((workout) => workout.difficulty === "expert").length,
      });

    }
  }, [data]);


  return (
    <div className="hidden absolute right-0 lg:flex flex-col gap-3 items-center justify-center p-4">
      {/* WIP WIP hidden on mobile screen, fix this */}
      <button
        className="bg-blue-400 dark:bg-purple-300 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={() => setOpenDropDown((prevOpenDropDown) => !prevOpenDropDown)}
      >
        Filter by category
        <IoMdArrowDropdown size={20} />
      </button>
      {openDropDown && (
        <div
          id="dropdown"
          className="z-10 w-56 p-3 bg-gray-100 rounded-lg shadow dark:bg-gray-700"
        >
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
            {isMuscle && <MuscleFilter amt={muscleCount} />}
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

            {isType && <TypeFilter amt={typeCount} />}
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

            {isDifficulty && <DifficultyFilter amt={difficultyCount} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutsFilter;
