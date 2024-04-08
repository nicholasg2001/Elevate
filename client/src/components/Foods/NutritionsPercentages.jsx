const NutritionsPercentages = ({ response }) => {
  const totalFat = response.totalNutrients?.FAT.quantity ?? 0;
  const totalCarbs = response.totalNutrients?.CHOCDF.quantity ?? 0;
  const totalProtein = response.totalNutrients?.PROCNT.quantity ?? 0;
  const totalAmount = totalFat + totalCarbs + totalProtein;

  const percentFat = ((totalFat / totalAmount) * 100).toFixed(0);
  const percentCarbs = ((totalCarbs / totalAmount) * 100).toFixed(0);
  const percentProtein = ((totalProtein / totalAmount) * 100).toFixed(0);

  return (
    <div className="md:flex flex-col gap-2 hidden ">
      <div className="flex gap-2 items-center">
        <div className="w-4 h-4 rounded-full bg-red-500" />
        <span className="font-semibold">
          {percentFat}%
        </span>
        Fat
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-4 h-4 rounded-full bg-orange-400" />
        <span className="font-semibold">
          {percentCarbs}%
        </span>
        Carbs
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-4 h-4 rounded-full bg-green-400" />
        <span className="font-semibold">
          {percentProtein}%
        </span>
        Protein
      </div>
    </div>
  );
};

export default NutritionsPercentages;
