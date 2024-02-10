import React, { useState } from 'react';
import '../App.css';

const TaskItem = ({ task, onDelete, onUpdatePriority }) => {
    const [priority, setPriority] = useState(task.priority || 'normal'); // Initialize priority state with task's priority or 'normal'

    // Function to handle task completion
    const handleCompletion = () => {
        // Delete the task immediately when checkbox is clicked
        onDelete(task.id); // Call onDelete function with task id
    };

    const handlePriorityChange = e => {
        const newPriority = e.target.value;
        setPriority(newPriority); // Update the priority state with the selected value from the dropdown
        onUpdatePriority(task.id, newPriority); // Call onUpdatePriority function with task id and new priority
    };

    return (
        <li className="task-item">
            {/* Checkbox for markinvg task as completed */}
            <input
                type="checkbox"
                onChange={handleCompletion}
                className="task-checkbox" 
            />
            <span className="task-title">{task.title}</span>  {/* Display task title */}
            {/* Dropdown menu for selecting priority */}
            <select value={priority} onChange={handlePriorityChange} className="priority-dropdown">
                <option value="urgent">Urgent</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
            </select>

        </li>
    );
};

export default TaskItem;
