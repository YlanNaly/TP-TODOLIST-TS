import { Key } from "react";
import TasksButtonToDo from "./TasksButtonToDo";

const TODO = (props: { tasks: any[]; toggleTask: any; deleteTask: any; }) => {

  return (
    <>
      {props.tasks.map((t, index) => (
        <TasksButtonToDo
              task={t}
              key={t.id}
              toggleTask={props.toggleTask}
              deleteTask={() => props.deleteTask(index)} addTasks={undefined}        
        />
      ))}
      
    </>
  );
};

export default TODO;
