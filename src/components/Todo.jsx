import { useState } from "react"

export const Todo=()=>{
    const [task,setTask]=useState("")
    const [description,SetDescription]=useState("")
    const [arr,setArr]=useState([])
    function addTask(){
    setArr([...arr,task,description])
    }
    function handleTask(e){
        console.log(e.target.value);
        setTask(e.target.value)
    }
    function handleDes(e){
     console.log(e.target.value);
    SetDescription(e.target.value)
    }

    return(
        <div>
            <h1>todo</h1>
            <input type="text" placeholder="type your task" 
            value={task} onChange={handleTask} />
            <br />
            <input type="text" placeholder="task description" 
            value={description} onChange={handleDes} />
            <br />
            <input type="date" placeholder="choose date" />
            <br />
            <button onClick={addTask}>add task</button>
            {arr.map((e,i)=>{
                return(
                <div>

                    <div key={i}>{e.task}</div>
                    <div key={i}>{e.description}</div>
                </div>
                    )
            })}
        </div>
    )
}