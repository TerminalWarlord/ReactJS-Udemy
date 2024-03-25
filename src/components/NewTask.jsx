import { useState, useRef } from "react";
import Modal from "./Model.jsx";

export default function NewTask({ onAddTask }) {
    const [enteredTask, setEnteredTask] = useState('');
    const dialog = useRef();
    function handleChange(event) {
        setEnteredTask(event.target.value);
    }
    function handleClick() {
        if (enteredTask.trim() === '') {
            dialog.current.open();
            return;
        }
        onAddTask(enteredTask);
        setEnteredTask('');
        console.log(enteredTask);
    }
    return <div className="flex items-center gap-4">
        <Modal ref={dialog} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-800 uppercase my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-8">Seems like you have left the input field empty!</p>
        </Modal>
        <input type="text" className="w-64 py-1 rounded-sm bg-stone-200" onChange={(event) => handleChange(event)} value={enteredTask} />
        <button className="text-stone-700 hover:text-stone-800" onClick={handleClick}>Add Task</button>
    </div>
}