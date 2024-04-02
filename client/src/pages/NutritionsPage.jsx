import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import FoodDetailedChart from "../components/Main/Charts/FoodDetailsChart";
import NutritionsFacts from "../components/Foods/NutritionsFacts";

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
          <div className="border-b w-full border-gray-300" />

          <div className="flex justify-evenly w-full gap-6 h-full py-4">
            <div className="flex flex-col gap-10 w-1/2">
              <div className="flex justify-around items-center rounded-xl">
                <div className="flex flex-col items-center justify-center">
                  <span>Daily Value</span>
                  <span>21%</span>
                </div>
                <div>
                  <FoodDetailedChart />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <div class="w-4 h-4 rounded-full bg-red-500" />
                    <span className="font-semibold">26%</span> Fat
                  </div>
                  <div className="flex gap-2 items-center">
                    <div class="w-4 h-4 rounded-full bg-orange-400" />
                    <span className="font-semibold">35%</span> Carbs
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-green-400" />
                    <span className="font-semibold">39%</span> Protein
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 p-4 grid grid-cols-3 gap-4 rounded-lg">
                <div className="text-center">
                  <div className="text-gray-600 mb-1 font-bold">Fats</div>
                  <div className="text-black">11.29g</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 mb-1 font-bold">Carbs</div>
                  <div className="text-black">67.2g</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 mb-1 font-bold">Protein</div>
                  <div className="text-black">23g</div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-semibold">Nutrition claims</h1>
                <div className=" flex gap-1">
                  <span className="text-gray-600 ">•Low Fat abs</span>
                  <div className="text-gray-600">•Low Fat abs</div>
                  <div className="text-gray-600">•Low Fat abs</div>
                </div>
              </div>
            </div>
            <NutritionsFacts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionsPage;
