import './App.css';
import TaskAjout from './Component/TasksAjout';
import { useState } from 'react';
import TODO from './Component/TODO';
import DOING from './Component/DOING';
function App() {
  const valeurVide = {}

  const [tasks, setTasks] = useState([
    { id: 1, text: "Manger!", done: true },
  ]);
  const [doing, setDoing] = useState([
  {}
  ]);
  const [done, setDone] = useState([
  {}
  ]);

  const addTask = (text: any) => {
    const newTask = {
      text,
      id: Date.now(),
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const addTask1 = (text: any) => {
    const newTask = {
      text,
      id: Date.now(),
      done: false,
    };
    setDoing([...doing, newTask]);
    setTasks([]);
  };
  const addTask2 = (text: any) => {
    const newTask = {
      text,
      id: Date.now(),
      done: true,
    };

    setDone([...doing, newTask]);
  };
 
  const toggleTask = (id:number ) => {
    const realTask = tasks.find((t: { id: number; }) => t.id === id);
    const index = tasks.findIndex((t: { id: number; }) => t.id === id);
    const taskCopy = { ...realTask };
    const tasksListCopy :any = [...tasks];

    tasksListCopy[index] = taskCopy;
    setTasks(tasksListCopy);
  };

  return (
<>
      {/* Input */}   
    <TaskAjout addTask={addTask} />

    <div className="App">
      <div className="todo" style={{width: "18rem"}}>

      {/* TO DO CARD*/}
        <div className="Todo-header">TO DO</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
      <TODO tasks={tasks} toggleTask={toggleTask} deleteTask={addTask1}/>
        </li>
      </ul>
    </div>
    <div className="doing" style={{width: "18rem"}}>

      {/*DOING CARD*/}
        <div className="Doing-header">DOING</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
      <DOING tasks={doing} toggleTask={toggleTask} deleteTask={addTask2}/>
        </li>
      </ul>
    </div>
    <div className="done" style={{width: "18rem"}}>

      {/* DONE CARD*/}
        <div className="Done-header">DONE</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">

        </li>
      </ul>
    </div>
  </div>
</>
    
  );
}

export default App;


