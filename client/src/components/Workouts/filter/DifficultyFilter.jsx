import { useRef } from "react";
const DifficultyFilter = ({ amt }) => {
  const beginnerRef = useRef(null);
  const intermediateRef = useRef(null);
  const expertRef = useRef(null);

  return (
    <ul className="space-y-2 text-sm">
      <li className="flex items-center">
        <input
          type="checkbox"
          ref={beginnerRef}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Beginner ({amt.beginner ?? 0})
        </label>
      </li>

      <li class="flex items-center">
        <input
          type="checkbox"
          ref={intermediateRef}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Intermediate ({amt.intermediate ?? 0})
        </label>
      </li>

      <li class="flex items-center">
        <input
          type="checkbox"
          ref={expertRef}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Expert ({amt.expert ?? 0})
        </label>
      </li>
    </ul>
  );
}

export default DifficultyFilter;