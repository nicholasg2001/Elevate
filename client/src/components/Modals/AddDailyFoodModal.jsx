import { useState } from "react";
import { Modal } from "flowbite-react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { useAddDailyFoodMutation } from "../../redux/services/DailyFoodService";
import { closeFoodModal } from "../../redux/feats/global/globalSlice";
import { toast } from "../../redux/feats/global/globalSlice";

const AddDailyFoodModal = ({ food_id }) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.global.isFoodModalOpen);
  const [addDailyFood] = useAddDailyFoodMutation();

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
        <div className="flex justify-center gap-4">
          <div>
            <p className="font-poppins text-lg">Sets</p>
            <input
              type="number"
              placeholder="Enter Sets"
              className={`font-poppins w-full p-2 border rounded-lg bg-transparent shadow-lg`}
              onChange={(event) => setSets(event.target.value)}
            />
            {/* {isSetsError && (
              <span className="text-xs text-red-500">Missing Values!</span>
            )} */}
          </div>
          <div>
            <p className="font-poppins text-lg">Reps</p>
            <input
              type="number"
              placeholder="Enter Reps"
              className={`font-poppins w-full p-2 border rounded-lg bg-transparent shadow-lg`}
              onChange={(event) => setReps(event.target.value)}
            />
            {/* {isRepsError && (
              <span className="text-xs text-red-500">Missing Values!</span>
            )} */}
          </div>
        </div>
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
