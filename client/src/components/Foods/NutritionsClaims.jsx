const NutritionsClaims = ({ response }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Nutrition claims</h1>
      {response.healthLabels.length === 0 ? (
        <div className="flex items-center justify-center h-20 w-full bg-white rounded-lg">
          None
        </div>
      ) : (
        <div className="flex gap-1 flex-wrap bg-white rounded-xl p-3">
          {response.healthLabels.map((label) => (
            <div className="text-gray-600">•{label}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NutritionsClaims;
