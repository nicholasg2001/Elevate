import Legs from "/src/assets/workouts/legs.png";
const WorkoutCard = ({ img, muscle, difficulty, type }) => {
  return (
    <div class="w-1/4 border border-gray-300 rounded-lg shadow-xl">
      <div className="flex justify-center">
        <img class="rounded-t-lg h-70 h-44" src={img} alt="" />
      </div>
      <div class="p-5 bg-slate-300 rounded-b-lg">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Single Leg Press
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-900">
          <span className=" text-black font-bold">Muscle:</span> {muscle}
        </p>
        <div className="flex gap-3">
          <p class="mb-3 font-normal text-gray-900 ">
            <span className=" text-black font-bold">Difficulty:</span>{" "}
            {difficulty}
          </p>
          <p class="mb-3 font-normal text-gray-900">
            <span className=" text-black font-bold">Type:</span> {type}
          </p>
        </div>
        <div className="flex justify-between">
          <button class="inline-flex items-center justify-end px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Learn more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <button class="inline-flex items-center justify-end px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Add Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
