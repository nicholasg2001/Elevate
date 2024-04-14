import { Modal } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  closeFoodModal,
  foodSelection,
} from "../../redux/feats/global/globalSlice";
import { Dropdown } from "flowbite-react";
import { FaUtensils, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import DailyFoodQuantity from "../Foods/DailyFoodQuantity";
import { useAddDailyFoodMutation } from "../../redux/services/DailyFoodService";
import axios from "axios";
import { toast } from "../../redux/feats/global/globalSlice";

const FoodModal = ({ foodID, measures, name }) => {
  const [foodError, setFoodError] = useState(true);
  const [addDailyFood] = useAddDailyFoodMutation();
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.global.isFoodModalOpen);
  const foodObject = useAppSelector((state) => state.global.foodSelection);
  const quantity = useAppSelector((state) => state.global.foodQuantity);
  const onDropDownSelection = (measure) => {
    setFoodError(false);
    dispatch(foodSelection({ label: measure.label, uri: measure.uri }));
  };

  const modalClose = () => {
    dispatch(closeFoodModal());
    setFoodError(true);
  };

  const onDailyFoodAdded = async () => {
    try {
      const id = import.meta.env.VITE_APP_ID;
      const key = import.meta.env.VITE_APP_KEY;
      const defaultQuantity = {
        ingredients: [
          {
            quantity: quantity,
            measureURI: foodObject.uri,
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
          addDailyFood({
            name: name,
            food_id: foodID,
            calories: res.data.calories,
            fat: res.data.totalNutrients.FAT,
            carbs: res.data.totalNutrients.CHOCDF,
            protein: res.data.totalNutrients.PROCNT,
          });
        })
        .catch((err) => {
          console.log(err);
        });

      dispatch(closeFoodModal());
      dispatch(toast({ state: true, message: "Food added successfully." }));
    } catch (error) {
      console.error(error);
      dispatch(toast({ state: true, message: "Could not add Food failed." }));
    }
  };
  return (
    <Modal
      dismissible
      show={isModalOpen}
      onClose={modalClose}
      size="md"
      position={"top-center"}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Body>
        <div className="flex gap-12 justify-evenly">
          <div>
            <label className="text-xl dark:text-white">Measurements</label>
            <Dropdown label={foodObject.label}>
              {measures.map((measure) => (
                <Dropdown.Item
                  key={measure.label}
                  onClick={() => onDropDownSelection(measure)}
                >
                  {measure.label}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
          <DailyFoodQuantity />
        </div>
      </Modal.Body>
      {!foodError && (
        <Modal.Footer>
          <Link
            to={`/auth/nutritions/${foodID}`}
            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Learn More
            <FaBook size={16} className="ml-2" />
          </Link>
          <button
            onClick={onDailyFoodAdded}
            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add Food
            <FaUtensils size={16} className="ml-1" />
          </button>
        </Modal.Footer>
      )}
    </Modal>
  );
};
export default FoodModal;
