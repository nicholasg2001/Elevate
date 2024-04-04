import { Modal } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  closeFoodModal,
  foodSelection,
} from "../../redux/feats/global/globalSlice";
import { Button, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
const FoodModal = ({ foodID, measures, name }) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.global.isFoodModalOpen);
  const { label: foodLabel } = useAppSelector(
    (state) => state.global.foodSelection
  );
  const onDropDownSelection = (measure) => dispatch(foodSelection({ label: measure.label, uri: measure.uri }));
  return (
    <Modal
      dismissible
      show={isModalOpen}
      onClose={() => dispatch(closeFoodModal())}
      size="md"
      position={"top-center"}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Body>
        <label className="text-xl">Add measurements</label>
        <Dropdown label={foodLabel} dismissOnClick={false}>
          {measures.map((measure) => (
            <Dropdown.Item
              key={measure.label}
              onClick={() => onDropDownSelection(measure)}
            >
              {measure.label}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </Modal.Body>

      <Modal.Footer>
        <Link
          to={`/auth/nutritions/${foodID}`}
          className="inline-flex items-center justify-end px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Learn More
          <IoFastFood size={16} className="ml-2" />
        </Link>
        <Button color="gray" onClick={() => dispatch(closeFoodModal())}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default FoodModal;
