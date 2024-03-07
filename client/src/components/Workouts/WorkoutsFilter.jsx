import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const WorkoutsFilter = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const [isDifficulty, setIsDifficulty] = useState(false);
  const [isType, setIsType] = useState(false);
  const [isMuscle, setIsMuscle] = useState(false);
  return (
    <div className="hidden absolute right-0 lg:flex flex-col gap-3 items-center justify-center p-4">
      {/* WIP WIP hidden on mobile screen, fix this */}
      <button
        className="bg-blue-400 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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

            {isMuscle && (
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Abdominals (16)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="fitbit"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Abductors (12)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Adductors (32)
                  </label>
                </li>
                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Biceps (63)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Calves (46)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Chest (32)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Forearms(21)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Glutes (27)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Hamstrings (29)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Lats (18)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Lower Back (38)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Middle Back (18)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Neck (68)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Quadriceps (38)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Traps (18)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Triceps (68)
                  </label>
                </li>
              </ul>
            )}
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

            {isType && (
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Cardio (56)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="fitbit"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Olympic Weightlifting (23)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Plyometrics (16)
                  </label>
                </li>
                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Power Lifting (46)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Strength (56)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Stretching (12)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Strong Man(30)
                  </label>
                </li>
              </ul>
            )}
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

            {isDifficulty && (
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Easy (120)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="fitbit"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Medium (56)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="dell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Hard (14)
                  </label>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutsFilter;
