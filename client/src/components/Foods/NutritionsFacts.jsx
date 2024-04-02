const NutritionsFacts = ({ daily, nutritions }) => {
  return (
    <div className="w-full xl:w-1/2 flex flex-col gap-4 shadow-xl bg-white text-slate-700 rounded-xl px-5 py-2">
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
            <span>{Number(nutritions.ENERC_KCAL.quantity).toFixed(0)}</span>
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
              Total Fat
              <span className="font-normal ml-1">
                {Number(nutritions.FAT.quantity ?? 0).toFixed(2)}
                {nutritions.FAT.unit}
              </span>
            </h1>
            <span className="font-bold">
              {Number(daily.FAT.quantity ?? 0).toFixed(2)}%
            </span>
          </div>
          <div className="flex flex-col gap-1 ml-6">
            <div className="border-b w-full border-gray-300" />
            <div className="flex justify-between items-center">
              <h1 className="text-md font-normal">
                Saturated Fat
                <span className="ml-1">
                  {Number(nutritions.FASAT.quantity ?? 0).toFixed(2)}
                  {nutritions.FASAT.unit}
                </span>
              </h1>
              <span className="font-bold">
                {Number(daily.FASAT.quantity ?? 0).toFixed(2)}%
              </span>
            </div>
            <div className="border-b w-full border-gray-300" />
            <div className="flex justify-between items-center">
              <h1 className="text-md font-normal">Fatty Acids
                <span className="ml-1">
                  {Number(nutritions.FAPU.quantity ?? 0).toFixed(2)}
                  {nutritions.FAPU.unit}
                </span>
              </h1>
            </div>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold">
              Cholesterol
              <span className="font-normal ml-1">
                {Number(nutritions.CHOLE.quantity ?? 0).toFixed(2)}
                {nutritions.CHOLE.unit}
              </span>
            </h1>
            <span className="font-bold">
              {Number(daily.CHOLE.quantity).toFixed(0)}%
            </span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold">
              Sodium
              <span className="font-normal ml-1">
                {Number(nutritions.NA.quantity ?? 0).toFixed(2)}
                {nutritions.NA.unit}
              </span>
            </h1>
            <span className="font-bold">
              {Number(daily.NA.quantity).toFixed(0)}%
            </span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold">
              Total Carbohydrate
              <span className="font-normal ml-1">
                {Number(nutritions.CHOCDF.quantity ?? 0).toFixed(2)}
                {nutritions.CHOCDF.unit}
              </span>
            </h1>
            <span className="font-bold">
              {Number(daily.CHOCDF.quantity ?? 0).toFixed(0)}%
            </span>
          </div>
          <div className="flex flex-col gap-1 ml-6">
            <div className="border-b w-full border-gray-300" />
            <div className="flex justify-between items-center">
              <h1 className="text-md font-normal">
                Dietary Fiber
                <span className="ml-1">
                  {Number(nutritions.FIBTG.quantity ?? 0).toFixed(2)}
                  {nutritions.FIBTG.unit}
                </span>
              </h1>
              <span className="font-bold">
                {Number(daily.FIBTG.quantity ?? 0).toFixed(0)}%
              </span>
            </div>
            <div className="border-b w-full border-gray-300" />
            <div className="flex justify-between items-center">
              <h1 className="text-md font-normal">
                Total Sugars
                <span className="ml-1">
                  {Number(nutritions.SUGAR.quantity ?? 0).toFixed(2)}
                  {nutritions.SUGAR.unit}
                </span>
              </h1>
            </div>
            <div className="border-b w-full border-gray-300" />
            <h1 className="text-md font-normal">Includes 0g Added Sugars</h1>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold">
              Protein
              <span className="font-normal ml-1">
                {Number(nutritions.PROCNT.quantity ?? 0).toFixed(2)}
                {nutritions.PROCNT.unit}
              </span>
            </h1>
            <span className="font-bold">
              {Number(daily.PROCNT.quantity ?? 0).toFixed(0)}%
            </span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md">
              Vitamin D
              <span className="font-normal ml-1">
                {Number(nutritions.VITD.quantity ?? 0).toFixed(2)}
                {nutritions.VITD.unit}
              </span>
            </h1>
            <span className="font-bold">
              {Number(daily.VITD.quantity ?? 0).toFixed(0)}%
            </span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md">
              Calcium
              <span className="font-normal ml-1">
                {Number(nutritions.CA.quantity ?? 0).toFixed(2)}
                {nutritions.CA.unit}
              </span>
            </h1>
            <span className="font-bold">
              {Number(daily.CA.quantity ?? 0).toFixed(0)}%
            </span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md">
              Iron
              <span className="font-normal ml-1">
                {Number(nutritions.FE.quantity ?? 0).toFixed(2)}
                {nutritions.FE.unit}
              </span>
            </h1>
            <span className="font-bold">
              {Number(daily.FE.quantity ?? 0).toFixed(0)}%
            </span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md">
              Potassium
              <span className="font-normal ml-1">
                {Number(nutritions.K.quantity ?? 0).toFixed(2)}
                {nutritions.K.unit}
              </span>
            </h1>
            <span className="font-bold ml-1">
              {Number(daily.K.quantity ?? 0).toFixed(0)}%
            </span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-md">
              Vitamin C
              <span className="font-normal ml-1">
                {Number(nutritions.VITC.quantity ?? 0).toFixed(2)}
                {nutritions.VITC.unit}
              </span>
            </h1>
            <span className="font-bold">
              {Number(daily.VITC.quantity ?? 0).toFixed(0)}%
            </span>
          </div>
          <div className="border-b w-full border-gray-300" />
        </div>
      </div>
    </div>
  );
}

export default NutritionsFacts;