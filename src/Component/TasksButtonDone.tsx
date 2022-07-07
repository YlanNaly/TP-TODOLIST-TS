import Tbutton from "./InterfaceButton";
import './css/TasksButtonDone.css';
const TasksButtonDone = (props :any) => {
  
    const { task, toggleTask, deleteTask } = props;
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />
          {task.text}
  
          <span
            className="forme"
            onClick={() => deleteTask(task.id)}
            role="button"
            style={{ padding: "5px", marginLeft: "20px" , fontSize:"20px" }}
          >
            &times;
          </span>
        </label>
      </div>
      
    );
  };
  
  export default TasksButtonDone;