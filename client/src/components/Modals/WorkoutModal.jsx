import { useState } from "react";
import { Modal } from "flowbite-react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { closeWorkoutModal } from "../../redux/feats/global/globalSlice";
const WorkoutModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(
    (state) => state.global.isWorkoutModalOpen
  );
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  const onWorkoutAdded = () => {
    // TODO: waiting on POST endpoints
    // await addWorkout({workoutId}); try catch();
    console.log("Sets", sets);
    console.log("Reps", reps);
    dispatch(closeWorkoutModal());
  };
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
              className="font-poppins w-full p-2 border border-gray-500 rounded-lg bg-transparent shadow-lg"
              onChange={(event) => setSets(event.target.value)}
            />
          </div>
          <div>
            <p className="font-poppins text-lg">Reps</p>
            <input
              type="number"
              placeholder="Enter Reps"
              className="font-poppins w-full p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
              onChange={(event) => setReps(event.target.value)}
            />
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
          onClick={onWorkoutAdded}
        >
          Add
        </button>
      </div>
    </Modal>
  );
};

export default WorkoutModal;
