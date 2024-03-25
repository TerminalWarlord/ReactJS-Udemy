import Input from "./Input.jsx"
import { useRef } from "react";
import Modal from "./Model.jsx";

export default function NewProject({ onAdd, onCancel }) {
    const enteredTitle = useRef();
    const enteredDescription = useRef();
    const enteredDueDate = useRef();
    const dialog = useRef();
    function handleClick() {
        if (enteredTitle.current.value.trim() === '' || enteredDescription.current.value.trim() === '' || enteredDueDate.current.value.trim() === '') {
            dialog.current.open();
            return;
        }
        const projectData = {
            title: enteredTitle.current.value,
            description: enteredDescription.current.value,
            dueDate: enteredDueDate.current.value,
        }
        console.log(enteredTitle.current.value);
        onAdd(projectData);
    }


    return <>
        <Modal ref={dialog} buttonCaption="Okay">
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
            <p className='text-stone-600 mb-4'>Oops... Looks like you forgot to enter a value!</p>
            <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <button className="text-stone-50 bg-stone-800 rounded-md px-6 py-2  hover:bg-stone-950" onClick={handleClick}>Save</button>
                </li>
            </menu>
            <div>
                <Input label="Title" ref={enteredTitle} type="text" />
                <Input label="Description" textarea ref={enteredDescription} />
                <Input label="Due Date" ref={enteredDueDate} type="date" />
            </div>
        </div></>
}