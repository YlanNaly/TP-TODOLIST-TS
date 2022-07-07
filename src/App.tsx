import './App.css';
import TaskAjout from './Component/TasksAjout';
import { useState } from 'react';
import TODO from './Component/TODO';
import DOING from './Component/DOING';
import DONE from './Component/DONE';

function App() {
  const valeurVide = {}
//TODO Tasks
const [tasks, setTasks] = useState([
    { id: 1, text: "Manger!", done: true },
  ]);

  const addToDoing = (index: number) => {
    setDoing([...doing, tasks[index]]);
    const tmp = [...tasks];
    tmp.splice(index, 1);
    setTasks(tmp);
  }

  const addToDone = (index: number) => {
    setDone([...done, doing[index]]);
    const tmp = [...doing];
    tmp.splice(index, 1);
    setDoing(tmp);
  }

  const addTask = (text: any) => {
    const newTask = {
      text,
      id: Date.now(),
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id:number ) => {
    const realTask = tasks.find((t: { id: number; }) => t.id === id);
    const index = tasks.findIndex((t: { id: number; }) => t.id === id);
    const taskCopy = { ...realTask };
    const tasksListCopy :any = [...tasks];

    tasksListCopy[index] = taskCopy;
    setTasks(tasksListCopy);
  };
//fin Todo tasks
//Doing Tasks
  const [doing, setDoing] = useState([
  {}
  ]);
  
  const addTask1 = (text: any) => {
    const newTask = {
      text,
      id: Date.now(),
      done: false,
    };

    setDoing([...tasks, newTask]);
  };
//Fin doing tasks
//Done tasks
  const [done, setDone] = useState([
  {}
  ]);
  const addTask2 = (text: any) => {
    const newTask = {
      text,
      id: Date.now(),
      done: true,
    };

    setDone([...doing, newTask]);
  };
  const deleteTask3 = (id: number) => {
    const tmp = [...done];
    tmp.splice(id, 1);
    setDone(tmp);
  }
//Fin done Tasks
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
      <TODO tasks={tasks} toggleTask={toggleTask} deleteTask={addToDoing}/>
        </li>
      </ul>
    </div>
    <div className="doing" style={{width: "18rem"}}>

      {/*DOING CARD*/}
        <div className="Doing-header">DOING</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
      <DOING tasks={doing} toggleTask={toggleTask} deleteTask={addToDone}/>
        </li>
      </ul>
    </div>
    <div className="done" style={{width: "18rem"}}>

      {/* DONE CARD*/}
        <div className="Done-header">DONE</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
      <DONE tasks={done} toggleTask={toggleTask} deleteTask={deleteTask3}/>
        </li>
      </ul>
    </div>
  </div>
</>
    
  );
  }

export default App;


