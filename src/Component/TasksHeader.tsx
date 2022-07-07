import './css/TasksHeader.css'
const TasksHeader = (props: { tasks: any[];doing :any;done :any}) => {
    const undoneTasks = props.tasks.filter((t: any) => t.tasks !=0);
    const undone = props.doing.filter((t :any):any => t.length!=0)
    const done = props.done.filter((t :any)=> t.length!=0)
    return (
      <header>
        <div className="title">
         <strong className='tache'> Tâches à faire :{undoneTasks.length}</strong>
         <strong className='tache'> Tâches en progression : {undone.length}</strong>  
         <strong className='tache'> Tâches faites : {done.length}</strong>  
        </div>
        
      </header>
    );
  };
  
  export default TasksHeader;
  