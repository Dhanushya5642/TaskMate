import './App.css';
import { useEffect, useState } from 'react';
import { default as AppTask } from "./components/AddTask"
import { default as ShowTask } from "./components/ShowTask"
import { default as Header } from "./components/Header"


function App() {
  const [taskList,setTaskList]=useState(JSON.parse(localStorage.getItem("taskList"))||[]);
  const [task,setTask]=useState([]);

  useEffect(()=>{
    localStorage.setItem("taskList",JSON.stringify(taskList))
  },[taskList])

  return (
    <div className="App">
    <Header/>
    <AppTask 
    tasklist={taskList}
    setTasklist={setTaskList}
    task={task}
    setTask={setTask} />
    <ShowTask tasklist={taskList} setTasklist={setTaskList} task={task}
    setTask={setTask}/>
    </div>
  );
}

export default App;
