import "./About.css";
import { useState } from "react";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";

function About() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "ColdStress",
      day: "MyDay",
      reminder: true,
    },
    {
      id: 2,
      text: "Exercise",
      day: "Equilibrium",
      reminder: true,
    },
    {
      id: 3,
      text: "Sauna",
      day: "Sunshine",
      reminder: true,
    },
    {
      id: 4,
      text: "Mindfulness Practice",
      day: "Moonlight",
      reminder: true,
    },
  ]);

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
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Jobs Done OKIDOKI Work Work"
      )}
    </div>
  );
}

export default About;
