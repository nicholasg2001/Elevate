const MuscleFilter = ({ amt, setMuscleSelections, muscleSelections }) => {
  const handleCheckboxChange = (muscle) => {
    setMuscleSelections(prev => ({
      ...prev,
      [muscle]: !prev[muscle]
    }));
  };
  return (
    <ul className="space-y-2 text-sm">
      {Object.entries(amt).map(([muscle, count]) => (
        <li key={muscle} className="flex items-center">
          <input
            id={muscle}
            type="checkbox"
            checked={muscleSelections[muscle] || false}
            onChange={() => handleCheckboxChange(muscle)}
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label htmlFor={muscle} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            {muscle.charAt(0).toUpperCase() + muscle.slice(1)} ({count ?? 0})
          </label>
        </li>
      ))}
    </ul>
  );
}

export default MuscleFilter;
