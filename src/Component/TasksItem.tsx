import React from "react";
import { Key } from "react";
import TaskAjout from "./TasksAjout";

const TasksListes = (props: { tasks: any[]; toggleTask: any; deleteTask: any; }) => {

  return (
    <>
      {props.tasks.map((t: { id: Key | undefined; }) => (
        <TaskAjout
              key={t.id} addTask={function (arg0: string): void {
                  throw new Error("Function not implemented.");
              } }        />
      ))}
      
    </>
  );
};

export default TasksListes;
