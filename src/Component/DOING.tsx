import { Key } from "react";
import TasksButtonDoing from "./TasksButtonDoing";

const DOING = (props: { tasks: any[]; toggleTask: any; deleteTask: any; }) => {

  return (
    <>
      {props.tasks.map((t: { id: Key | undefined; }, index) => (
        <TasksButtonDoing
          task={t}
          key={t.id}
          toggleTask={props.toggleTask}
          deleteTask={() => props.deleteTask(index)} addTasks={undefined} deleteTask3={undefined}        />
      ))}
    </>
  );
};

export default DOING;
