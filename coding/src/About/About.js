import "./About.css";
import { useState, useEffect } from "react";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import axios from "axios";

function About() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/aboutdata");
      setTasks(result.data);
    };
    fetchData();
  }, []);

  if (!tasks) {
    return <p>You Shall Not Pass !!!</p>;
  }

  //ADD TASK

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //DETELE TASK

  const deleteTask = (id) => {
    console.log(id, "DSDS");
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //TOGGLE REMINDER

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Jobs Done OKIDOKI Work Work"
      )}
    </div>
  );
}

export default About;
