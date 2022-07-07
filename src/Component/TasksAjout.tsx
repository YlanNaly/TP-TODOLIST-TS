import { useState } from "react";
import './css/TasksAjout.css';

const TaskAjout = (props: { addTask: (arg0: string) => void; }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.addTask(text);
    setText("");
  };

  return (
    <form className="forme" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{marginLeft: "30%" , width:"30%" }}
      />
      <button onClick={handleSubmit}>
        TODO
      </button>
    </form>
  );
};

export default TaskAjout;