import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import axios from "axios";
import FoodDetailedChart from "../components/Main/Charts/FoodDetailsChart";
import NutritionsFacts from "../components/Foods/NutritionsFacts";
import {
  closeFoodModal,
  foodQuantity,
} from "../redux/feats/global/globalSlice";
import NutritionsPercentages from "../components/Foods/NutritionsPercentages";
import NutritionsOverview from "../components/Foods/NutritionsOverview";
import NutritionsClaims from "../components/Foods/NutritionsClaims";

const NutritionsPage = () => {
  const uri = useAppSelector((state) => state.global.foodSelection.uri);
  const { foodID } = useParams();
  const [response, setResponse] = useState();
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => state.global.foodQuantity);
  useEffect(() => {
    const id = import.meta.env.VITE_APP_ID;
    const key = import.meta.env.VITE_APP_KEY;
    dispatch(closeFoodModal());
    dispatch(foodQuantity(1));
    const defaultQuantity = {
      ingredients: [
        {
          quantity: quantity,
          measureURI: uri,
          foodId: foodID,
        },
      ],
    };
    axios
      .post(
        `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${id}&app_key=${key}`,
        defaultQuantity
      )
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {response ? (
        <div className="bg-gradient-to-b from-color7 to-color3 flex xl:justify-evenl justify-center w-screen min-h-screen p-2">
          <div className="flex flex-col items-center w-5/6 h-full">
            <div className="flex flex-col gap-5 items-center w-full xl:w-5/6 h-full">
              <div className="flex w-3/4 justify-center gap-10">
                <div className="flex justify-center items-center h-full">
                  <h1 className="text-6xl font-bold item">
                    {response.ingredients[0].parsed[0].food}
                  </h1>
                </div>
              </div>
              <div className="border-b w-full border-gray-300" />
              <div className="flex xl:justify-evenly xl:flex-row flex-col items-center w-full gap-6 h-full py-4">
                <div className="flex flex-col gap-10 xl:w-1/2 w-full">
                  <div className="flex xl:justify-around justify-center w-full items-center rounded-xl">
                    <div className="flex flex-col items-center justify-center text-md lg:text-2xl">
                      <span className="font-bold ">Calories</span>
                      <span>{response.calories}</span>
                    </div>
                    <FoodDetailedChart data={response} />
                    <NutritionsPercentages response={response} />
                  </div>
                  <NutritionsOverview response={response} />
                  <NutritionsClaims response={response} />
                </div>
                <NutritionsFacts
                  daily={response.totalDaily}
                  nutritions={response.totalNutrients}
                  serving={response.ingredients[0].parsed[0].measure}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-screen">
          <Spinner aria-label="Profile loading spinner" size="xl" />
        </div>
      )}
    </>
  );
};

export default NutritionsPage;
