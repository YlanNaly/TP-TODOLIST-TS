import './App.css';
import TaskAjout from './Component/TasksAjout';
import { useState } from 'react';
import TODO from './Component/TODO';
import DOING from './Component/DOING';
import DONE from './Component/DONE';
import TasksHeader from './Component/TasksHeader';
import NavTitle from './Component/NavTitle';

function App() {
//TODO Tasks
const [tasks, setTasks] = useState([
    { id: 1, text: "Manger!", done: true },
  ]);
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
  {id: 1, text: "Manger!", done: false }
  ]);
  const addToDoing = (index: number) => {
    setDoing([...doing, tasks[index]]);
    const tmp = [...tasks];
    tmp.splice(index, 1);
    setTasks(tmp);
  }

  
//Fin doing tasks
//Done tasks
  const [done, setDone] = useState([
  {}
  ]);
  const addToDone = (index: number) => {
    setDone([...done, doing[index]]);
    const tmp = [...doing];
    tmp.splice(index, 1);
    setDoing(tmp);
  }
  const deletes = (index: number) =>{
    const tmp = [...doing];
    tmp.shift();
    setDoing(tmp);
  }
  const deleteTask3 = (id: number) => {
    const tmp = [...done];
    tmp.splice(id, 1);
    setDone(tmp);
  }

//Fin done Tasks
  return (
<div className='container'>
  <NavTitle/>
      {/* Input */}   
    <TaskAjout addTask={addTask} />
    <TasksHeader tasks={tasks} doing={doing} done={done}/>
    <div className="App">
      
      {/* TO DO CARD*/}
      <div className="todo" style={{width: "18rem"}}>
        <div className="Todo-header">TO DO</div>
      <ul className="list-group list-group-flush">
      <TODO tasks={tasks} toggleTask={toggleTask} deleteTask={addToDoing} deleteTask3={deletes} />
      </ul>
    </div>

      {/*DOING CARD*/}
    <div className="doing" style={{width: "18rem"}}>
        <div className="Doing-header">DOING</div>
      <ul className="list-group list-group-flush">
      <DOING tasks={doing} toggleTask={toggleTask} deleteTask={addToDone}/>
      </ul>
    </div>

    {/* DONE CARD*/}
    <div className="done" style={{width: "18rem"}}>  
        <div className="Done-header">DONE</div>
      <ul className="list-group list-group-flush">
      <DONE tasks={done} toggleTask={toggleTask} deleteTask={deleteTask3}/>
      </ul>
    </div>
  </div>
</div>
    
  );
  }

export default App;


