import { IoFastFoodOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { foodQuantity } from "../../redux/feats/global/globalSlice";
import { FaPlus, FaMinus } from "react-icons/fa6";

const DailyFoodQuantity = () => {
  const quantity = useAppSelector((state) => state.global.foodQuantity);
  const dispatch = useAppDispatch();

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity)) {
      dispatch(foodQuantity(newQuantity));
    }
  };

  const incrementQuantity = () => {
    dispatch(foodQuantity(quantity + 1));
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      dispatch(foodQuantity(quantity - 1));
    }
  };

  return (
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
          <FaMinus size={16} className="dark:text-white"/>
        </button>
        <input
          type="text"
          className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={quantity}
          onChange={handleChange}
        />
        <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
          <IoFastFoodOutline size={16} className="dark:text-gray-400"/>
          <span>Amount</span>
        </div>
        <button
          type="button"
          onClick={incrementQuantity}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <FaPlus size={16} className="dark:text-white"/>
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Please select the amount consumed
      </p>
    </form>
  );
};

export default DailyFoodQuantity;
