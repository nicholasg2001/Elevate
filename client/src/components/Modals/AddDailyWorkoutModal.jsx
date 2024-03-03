import { useState } from "react";
import { Modal } from "flowbite-react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { closeWorkoutModal } from "../../redux/feats/global/globalSlice";
import { useAddDailyWorkoutMutation } from '../../redux/services/DailyWorkoutService';
import { toast } from "../../redux/feats/global/globalSlice";

const AddDailyWorkoutModal = ({ workout_id }) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(
    (state) => state.global.isWorkoutModalOpen
  );
  const [addDailyWorkout] = useAddDailyWorkoutMutation();
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const [isRepsError, setIsRepError] = useState(false);
  const [isSetsError, setIsSetsError] = useState(false);

  const onDailyWorkoutAdded = async () => {
    if (!reps || !sets) {
      setIsRepError(true);
      setIsSetsError(true);
      return;
    }
    try {
      await addDailyWorkout({
        workout_id: workout_id,
        sets: sets,
        reps: reps,
      });
      dispatch(closeWorkoutModal());
      dispatch(toast({ state: true, message: "Workout added successfully." }));
    } catch (error) {
      console.error(error);
      dispatch(toast({ state: true, message: "Could not add workout failed." }));
    }
    resetModalValues();
  };

  const resetModalValues = () => {
    setReps(0);
    setSets(0);
    setIsRepError(false);
    setIsSetsError(false);
  }
  return (
    <Modal
      show={isModalOpen}
      onClose={() => dispatch(closeWorkoutModal())}
      size="sm"
      position={"center"}
    >
      <Modal.Header>Add Workout</Modal.Header>
      <Modal.Body>
        <div className="flex justify-center gap-4">
          <div>
            <p className="font-poppins text-lg">Sets</p>
            <input
              type="number"
              placeholder="Enter Sets"
              className={`font-poppins w-full p-2 border rounded-lg bg-transparent shadow-lg ${isSetsError ? 'border-rose-500' : ''}`}
              onChange={(event) => setSets(event.target.value)}
            />
            {isSetsError && <span className="text-xs text-red-500">Missing Values!</span>}
          </div>
          <div>
            <p className="font-poppins text-lg">Reps</p>
            <input
              type="number"
              placeholder="Enter Reps"
              className={`font-poppins w-full p-2 border rounded-lg bg-transparent shadow-lg ${isRepsError ? 'border-rose-500' : ''}`}
              onChange={(event) => setReps(event.target.value)}
            />
            {isRepsError && <span className="text-xs text-red-500">Missing Values!</span>}
          </div>
        </div>
      </Modal.Body>

      <div className="flex justify-evenly px-10 py-5">
        <button
          className="inline-flex items-center justify-end px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-30"
          onClick={() => dispatch(closeWorkoutModal())}
        >
          Cancel
        </button>
        <button
          className="inline-flex items-center justify-end px-5 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-30"
          onClick={onDailyWorkoutAdded}
        >
          Add
        </button>
      </div>
    </Modal>
  );
};

export default AddDailyWorkoutModal;
