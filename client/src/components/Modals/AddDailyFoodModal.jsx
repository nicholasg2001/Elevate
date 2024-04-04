import { useState } from "react";
import { Modal } from "flowbite-react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { useAddDailyFoodMutation } from "../../redux/services/DailyFoodService";
import { IoFastFoodOutline } from "react-icons/io5";
import { closeFoodModal } from "../../redux/feats/global/globalSlice";
import { toast } from "../../redux/feats/global/globalSlice";

const AddDailyFoodModal = ({ food_id }) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.global.isFoodModalOpen);
  const [addDailyFood] = useAddDailyFoodMutation();
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const onDailyFoodAdded = async () => {
    try {
      await addDailyFood({
        food_id: food_id,
      });
      dispatch(closeFoodModal());
      dispatch(toast({ state: true, message: "Food added successfully." }));
    } catch (error) {
      console.error(error);
      dispatch(toast({ state: true, message: "Could not add Food failed." }));
    }
  };

  const resetModalValues = () => {
    // reset if needed
  };

  return (
    <Modal
      show={isModalOpen}
      onClose={() => dispatch(closeFoodModal())}
      size="sm"
      position={"center"}
    >
      <Modal.Header>Add Food</Modal.Header>
      <Modal.Body>
        <form className="max-w-xs mx-auto">
          <label
            htmlFor="food-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choose quantity:
          </label>
          <div className="relative flex items-center max-w-[11rem]">
            <button
              type="button"
              onClick={decrementQuantity}
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              value={quantity}
            />
            <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
              <IoFastFoodOutline size={16} />
              <span>Amount</span>
            </div>
            <button
              type="button"
              onClick={incrementQuantity}
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <p
            id="helper-text-explanation"
            class="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Please select the amount ate
          </p>
        </form>
      </Modal.Body>

      <div className="flex justify-evenly px-10 py-5">
        <button
          className="inline-flex items-center justify-end px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-30"
          onClick={() => dispatch(closeFoodModal())}
        >
          Cancel
        </button>
        <button
          className="inline-flex items-center justify-end px-5 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-30"
          onClick={onDailyFoodAdded}
        >
          Add
        </button>
      </div>
    </Modal>
  );
};

export default AddDailyFoodModal;
