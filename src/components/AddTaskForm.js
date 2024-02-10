import React, { useState } from 'react';
import '../App.css';

const AddTaskForm = ({ onAdd }) => {
    const [taskTitle, setTaskTitle] = useState(''); // State for task title input
    const [priority, setPriority] = useState('normal'); // State for task priority


    // Function to handle form submission
    const handleSubmit = e => {
        e.preventDefault(); // Prevent default form submission behavior
        if (!taskTitle.trim()) return; // Do nothing if task title is empty or contains only whitespace
        onAdd(taskTitle, priority); // Call onAdd function with task title and priority
        setTaskTitle(''); // Clear task title input
        setPriority('normal'); // Reset priority to default after adding task
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                placeholder="Enter task title"
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)}
                className="task-input"
                // Update task title state as user types
            />
            <select
                value={priority}
                onChange={e => setPriority(e.target.value)}
                className="priority-select"
            >
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
                <option value="low">Low</option>
            </select>
            <button type="submit" className="add-button">Add Task</button> {/* Submit button */}
        </form>
    );
};

export default AddTaskForm;
