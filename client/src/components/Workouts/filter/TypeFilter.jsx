const TypeFilter = ({ amt, setTypeSelections, typeSelections }) => {
  const handleCheckboxChange = (type) => {
    setTypeSelections(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <ul className="space-y-2 text-sm">
      {Object.entries(amt).map(([type, count]) => (
        <li key={type} className="flex items-center">
          <input
            id={type}
            type="checkbox"
            checked={typeSelections[type] || false}
            onChange={() => handleCheckboxChange(type)}
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label htmlFor={type} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            {type.charAt(0).toUpperCase() + type.slice(1)} ({count ?? 0})
          </label>
        </li>
      ))}
    </ul>
  )
}
export default TypeFilter;