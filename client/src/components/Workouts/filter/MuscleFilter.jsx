const MuscleFilter = ({ amt }) => {
  return (
    <ul className="space-y-2 text-sm">
      <li className="flex items-center">
        <input
          type="checkbox"
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />

        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Abdominals ({amt.abdominals ?? 0} )
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
          Abductors ({amt.abductors ?? 0})
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
          Adductors ({amt.adductors ?? 0})
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
          Biceps ({amt.biceps ?? 0})
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
          Calves ({amt.calves ?? 0})
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
          Chest ({amt.chest ?? 0})
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
          Forearms({amt.forearms ?? 0})
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
          Glutes ({amt.glutes ?? 0})
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
          Hamstrings ({amt.hamstrings ?? 0})
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
          Lats ({amt.lats})
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
          Lower Back ({amt.lowerBack ?? 0})
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
          Middle Back ({amt.middleBack ?? 0})
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
          Neck ({amt.neck ?? 0})
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
          Quadriceps ({amt.quadriceps ?? 0})
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
          Traps ({amt.traps ?? 0})
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
          Triceps ({amt.triceps ?? 0})
        </label>
      </li>
    </ul>
  );
}

export default MuscleFilter;