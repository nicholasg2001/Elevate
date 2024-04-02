const NutritionsFacts = () => {
  return (
    <div className="w-1/2 flex flex-col gap-4 shadow-xl bg-white text-slate-700 rounded-xl px-5 py-2">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold">Nutrition Facts</h1>
        <div className="border-b w-full border-gray-300" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Serving Size</h1>
          <span className="font-semibold">(100 gram)</span>
        </div>
        <div className="border-b  w-full border-gray-200"></div>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <span className="text-md font-bold">
            Amount per 100 grams
          </span>
          <div className="flex justify-between items-center text-3xl font-bold">
            <h1>Calories</h1>
            <span>273</span>
          </div>
          <div className="border-b-4 w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-end font-bold text-xs">
            % Daily Value*
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold">
              Total Fat <span className="font-normal">13.20g</span>
            </h1>
            <span className="font-bold">20%</span>
          </div>
          <div className="flex flex-col gap-1 ml-6">
            <div className="border-b w-full border-gray-300" />
            <div className="flex justify-between items-center">
              <h1 className="text-md font-normal">
                Saturated Fat 2.35g
              </h1>
              <span className="font-bold">12%</span>
            </div>
            <div className="border-b w-full border-gray-300" />
            <div className="flex justify-between items-center">
              <h1 className="text-md font-normal">Trans Fat 0.08g</h1>
            </div>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold">
              Cholesterol <span className="font-normal">9.00mg</span>
            </h1>
            <span className="font-bold">3%</span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold">
              Sodium <span className="font-normal">320mg</span>
            </h1>
            <span className="font-bold">14%</span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold">
              Total Carbohydrate <span className="font-normal">67.74g</span>
            </h1>
            <span className="font-bold">23%</span>
          </div>
          <div className="flex flex-col gap-1 ml-6">
            <div className="border-b w-full border-gray-300" />
            <div className="flex justify-between items-center">
              <h1 className="text-md font-normal">
                Dietary Fiber 0.00g
              </h1>
              <span className="font-bold">0%</span>
            </div>
            <div className="border-b w-full border-gray-300" />
            <div className="flex justify-between items-center">
              <h1 className="text-md font-normal">Total Sugars 61.29g</h1>
            </div>
            <div className="border-b w-full border-gray-300" />
            <h1 className="text-md font-normal">Includes 0g Added Sugars</h1>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold">
              Protein <span className="font-normal">12.90g</span>
            </h1>
            <span className="font-bold">26%</span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md">
              Vitamin D <span className="font-normal">1.5mcg</span>
            </h1>
            <span className="font-bold">8%</span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md">
              Calcium <span className="font-normal">250mg</span>
            </h1>
            <span className="font-bold">25%</span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md">
              Iron <span className="font-normal">2.5mg</span>
            </h1>
            <span className="font-bold">14%</span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md">
              Potassium <span className="font-normal">400mg</span>
            </h1>
            <span className="font-bold">10%</span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md">
              Vitamin C <span className="font-normal">30mg</span>
            </h1>
            <span className="font-bold">50%</span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
      </div>
    </div>
  );
}

export default NutritionsFacts;