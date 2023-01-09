/*
This is an app I built following this youtube tutorial (the code is not mine!): 
https://www.youtube.com/watch?v=w7ejDZ8SWv8&ab_channel=TraversyMedia
it was very helpful for understanding the react basics, I highly
recommend!
*/

import React, { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./Tasks";
import AddTask from './components/AddTask';

function App() {
  /* This is where our state goes */
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment', 
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {    
        id: 2, 
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping', 
        day: 'Feb 5th at 2:30pm', 
        reminder: false,
    }, 
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log("delete", id)
  }

  // Toggle Reminder
  const toggleReminder = (id) => { 
    setTasks(tasks.map((task) => task.id === id ?
    {...task, reminder: !task.reminder} :
    task))
  }

  return (
    <div className="container">
      <Header title="Sam's Task Tracker" 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask} />  
      {showAddTask && <AddTask onAdd={addTask} />}
      
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder} /> 
      ) : (
        'No Tasks To Show')}
    </div>
  );
}

export default App;
