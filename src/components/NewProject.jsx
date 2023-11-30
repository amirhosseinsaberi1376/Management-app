import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAddProject, onCancel }) => {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle === "" ||
      enteredDescription === "" ||
      enteredDueDate === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
          Invalid input
        </h2>
        <p className="text-stone-600 mb-4">
          Oops! Looks like you have forgotten to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you have provided a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" isTextarea={false} />
          <Input ref={descriptionRef} label="Description" isTextarea />
          <Input
            type="date"
            ref={dueDateRef}
            label="Due Date"
            isTextarea={false}
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
