import React from 'react';
import TaskItem from './TaskItem';
import '../App.css';

const TaskList = ({ tasks, onDelete, onUpdatePriority }) => {
    return (
        <ul className="task-list">
            {/* Map through tasks and render TaskItem for each task */}
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onDelete={onDelete} onUpdatePriority={onUpdatePriority} />
            ))}
        </ul>
    );
};

export default TaskList;
