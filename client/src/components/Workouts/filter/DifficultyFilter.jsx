const DifficultyFilter = ({ amt, setDifficultySelections, difficultySelections }) => {
  const handleCheckboxChange = (difficulty) => {
      setDifficultySelections(prev => ({
          ...prev,
          [difficulty]: !prev[difficulty]
      }));
  };

  return (
      <ul className="space-y-2 text-sm">
          {Object.entries(amt).map(([difficulty, count]) => (
              <li key={difficulty} className="flex items-center">
                  <input
                      id={difficulty}
                      type="checkbox"
                      checked={difficultySelections[difficulty] || false}
                      onChange={() => handleCheckboxChange(difficulty)}
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label htmlFor={difficulty} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} ({count ?? 0})
                  </label>
              </li>
          ))}
      </ul>
  );
};

export default DifficultyFilter;
