// src/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import TaskItem from './components/TaskItem';
import db from './db';
import './App.css'; 

function App() {
    const [tasks, setTasks] = useState([]); // State for tasks

    // Load tasks from IndexedDB when component mounts
    useEffect(() => {
        loadTasks();
    }, []);

    // Load tasks from IndexedDB
    const loadTasks = async () => {
        try {
            const tasksFromDB = await db.tasks.toArray();
            setTasks(tasksFromDB); // Set tasks state with tasks from IndexedDB
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };

    // Add task to IndexedDB
    const addTask = async (title, priority = 'normal') => {
        try {
            const newTask = { title, priority };
            const id = await db.tasks.add(newTask);
            setTasks([...tasks, { ...newTask, id }]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    // Delete task from IndexedDB and state
    const deleteTask = async id => {
        try {
            await db.tasks.delete(id);
            setTasks(tasks.filter(task => task.id !== id)); // Remove deleted task from tasks state
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    // Update task priority in IndexedDB
    const updatePriority = async (id, priority) => {
        try {
            await db.tasks.update(id, { priority });
        } catch (error) {
            console.error('Error updating task priority:', error);
        }
    };

    return (
        <div className="app-container">
            <div className="box-container">
                <h1>Task Manager</h1>
                <AddTaskForm onAdd={addTask} /> {/* Render AddTaskForm */}
                <TaskList tasks={tasks} onDelete={deleteTask} onUpdatePriority={updatePriority} /> {/* Render TaskList */}
            </div>
        </div>
    );
}

export default App;
