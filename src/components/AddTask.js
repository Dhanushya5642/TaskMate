

const AddTask = ({tasklist,setTasklist,task,setTask}) => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task.id){
            const date=new Date();
            const upadtedTaskList=tasklist.map((todo)=>(todo.id===task.id)? {id:task.id,name:task.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}: todo)
            setTasklist(upadtedTaskList)
            task.name="";
        }
        else{
            const date=new Date();
            const newTask={
                id:date.getTime(),
                name:e.target.task.value,
                time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasklist([...tasklist,newTask]);
            task.name="";
        }
       
    }
    
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name||""} placeholder="Add Task" autoComplete="off" maxLength="25" onChange={e=>setTask({...task,name:e.target.value})}/>
            <button type="submit">{task.id?"Update":"Add"}</button>
        </form>
    </section>
  )
}

export default AddTask
