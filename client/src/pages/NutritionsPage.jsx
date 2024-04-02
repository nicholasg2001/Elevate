import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import FoodDetailedChart from "../components/Main/Charts/FoodDetailsChart";

const NutritionsPage = () => {
  const { foodID } = useParams();
  //   useEffect(() => {
  //     const id = import.meta.env.VITE_APP_ID;
  //     const key = import.meta.env.VITE_APP_KEY;
  //     // we maybe change this later on with redux
  //     // we also might need to change the measureURI as well....
  //     const defaultQuantity = {
  //       ingredients: [
  //         {
  //           quantity: 1,
  //           measureURI:
  //             "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
  //           foodId: "food_b5klbjta0fg0whahomv72agdt8av",
  //         },
  //       ],
  //     };
  //     const response = axios
  //       .post(
  //         `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${id}&app_key=${key}`,
  //         defaultQuantity
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  return (
    <div className="bg-cyan-500 flex justify-evenly w-screen h-screen p-2">
      <div className="bg-gray-50 flex flex-col items-center w-5/6 h-full">
        <div className="flex flex-col gap-5 items-center w-5/6 h-full">
          <div className="flex w-3/4 items-start gap-10">
            <div className="w-1/5 h-32 items-center rounded-lg flex justify-center bg-gray-200">
              image
            </div>
            <div className="flex justify-center items-center h-full">
              <h1 className="text-4xl font-bold item">Cheese Pizza</h1>
            </div>
          </div>

          <div className="border-b-2 w-full border-black"></div>

          <div className="flex justify-evenly w-full gap-6 h-full">
            <div className="w-1/2 bg-blue-400">xl</div>

            <div className="w-1/2 flex flex-col gap-4 shadow-xl bg-white text-slate-700 rounded-xl px-5 py-2">
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-bold">Nutrition Facts</h1>
                <div className="border-b-2 w-full border-gray-600"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">Serving Size</h1>
                  <span className="font-semibold">(100 gram)</span>
                </div>
                <div className="border-b-8 w-full border-gray-200"></div>
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
                  <div className="border-b-4 w-full border-gray-300"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-end font-bold text-xs">
                    % Daily Value*
                  </div>
                  <div className="border-b w-full border-gray-300"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h1 className="text-md font-bold">
                      Total Fat <span className="font-normal">13.20g</span>
                    </h1>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="flex flex-col gap-1 ml-6">
                    <div className="border-b w-full border-gray-300"></div>
                    <div className="flex justify-between items-center">
                      <h1 className="text-md font-normal">
                        Saturated Fat 2.35g
                      </h1>
                      <span className="font-bold">12%</span>
                    </div>
                    <div className="border-b w-full border-gray-300"></div>
                    <div className="flex justify-between items-center">
                      <h1 className="text-md font-normal">Trans Fat 0.08g</h1>
                    </div>
                    <div className="border-b w-full border-gray-300"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Cholesterol <span className="font-normal">9.00mg</span>
                  </h1>
                  <span className="font-bold">3%</span>
                </div>
                <div className="border-b w-full border-gray-300"></div>
                {/* Missing Nutritional Facts */}
                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Sodium <span className="font-normal">320mg</span>
                  </h1>
                  <span className="font-bold">14%</span>
                </div>
                <div className="border-b w-full border-gray-300"></div>

                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Total Carbohydrate <span className="font-normal">35g</span>
                  </h1>
                  <span className="font-bold">12%</span>
                </div>
                <div className="border-b w-full border-gray-300"></div>

                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Dietary Fiber <span className="font-normal">2g</span>
                  </h1>
                  <span className="font-bold">8%</span>
                </div>
                <div className="border-b w-full border-gray-300"></div>

                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Total Sugar <span className="font-normal">5g</span>
                  </h1>
                </div>
                <div className="border-b w-full border-gray-300"></div>

                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Included Sugars <span className="font-normal">3g</span>
                  </h1>
                </div>
                <div className="border-b w-full border-gray-300"></div>

                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Protein <span className="font-normal">15g</span>
                  </h1>
                  <span className="font-bold">30%</span>
                </div>
                <div className="border-b w-full border-gray-300"></div>

                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Vitamin D <span className="font-normal">1.5mcg</span>
                  </h1>
                  <span className="font-bold">8%</span>
                </div>
                <div className="border-b w-full border-gray-300"></div>

                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Calcium <span className="font-normal">250mg</span>
                  </h1>
                  <span className="font-bold">25%</span>
                </div>
                <div className="border-b w-full border-gray-300"></div>

                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Iron <span className="font-normal">2.5mg</span>
                  </h1>
                  <span className="font-bold">14%</span>
                </div>
                <div className="border-b w-full border-gray-300"></div>

                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Potassium <span className="font-normal">400mg</span>
                  </h1>
                  <span className="font-bold">10%</span>
                </div>
                <div className="border-b w-full border-gray-300"></div>

                <div className="flex justify-between items-center">
                  <h1 className="text-md font-bold">
                    Vitamin C <span className="font-normal">30mg</span>
                  </h1>
                  <span className="font-bold">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionsPage;
