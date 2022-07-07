import { Key } from "react";
import TasksButtonDone from "./TasksButtonDone";

const DONE = (props: { tasks: any[]; toggleTask: any; deleteTask: any; }) => {

  return (
    <>
      {props.tasks.map((t: { id: Key | undefined; }, index) => (
        <TasksButtonDone
              task={t}
              key={t.id}
              toggleTask={props.toggleTask}
              deleteTask={() => props.deleteTask(index)} addTasks={undefined}        />
      ))}
      
    </>
  );
};

export default DONE;
