const NutritionsOverview = ({ response }) => {
  return (
    <div className="bg-gray-200 p-4 grid grid-cols-3 gap-4 rounded-lg">
      <div className="text-center">
        <div className="text-gray-600 mb-1 font-bold">Fats</div>
        <div className="text-black">
          {Number(response.totalNutrients?.FAT.quantity ?? 0).toFixed(2)}g
        </div>
      </div>
      <div className="text-center">
        <div className="text-gray-600 mb-1 font-bold">Carbs</div>
        <div className="text-black">
          {Number(response.totalNutrients?.CHOCDF.quantity ?? 0).toFixed(2)}g
        </div>
      </div>
      <div className="text-center">
        <div className="text-gray-600 mb-1 font-bold">Protein</div>
        <div className="text-black">
          {Number(response.totalNutrients?.PROCNT.quantity ?? 0).toFixed(2)}g
        </div>
      </div>
    </div>
  );
};

export default NutritionsOverview;
