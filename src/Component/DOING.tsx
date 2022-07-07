import { Key } from "react";
import TasksButtonDoing from "./TasksButtonDoing";

const DOING = (props: { tasks: any[]; toggleTask: any; deleteTask: any; }) => {

  return (
    <>
      {props.tasks.map((t: { id: Key | undefined; }) => (
        <TasksButtonDoing
              task={t}
              key={t.id}
              toggleTask={props.toggleTask}
              deleteTask={props.deleteTask} addTasks={undefined}        />
      ))}
      
    </>
  );
};

export default DOING;
