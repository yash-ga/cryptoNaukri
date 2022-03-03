import { useState } from "react"

export const Todo1=()=>{
    const [text,setText]=useState("")
    const [desc,setDesc]=useState("")
    const [todo,setTodo]=useState([])
    const handleText=(e)=>{
        console.log(e.target.value);
        setText(e.target.value)
    }
    const handleD=(e)=>{
        setDesc(e.target.value)
    }
    const handleTodo=(e)=>{
        e.preventDefault()
        setTodo([...todo,text,desc])
        setText("")
        setDesc("")
    }
    const clear=()=>{
        setTodo([])
    }
    return(
        <div>
            <form onSubmit={handleTodo}>

            <h1>todo123</h1>
            <input type="text" placeholder="text" value={text} onChange={handleText} />
            <input type="text" placeholder="des" value={desc} onChange={handleD} />
            {/* <button onClick={handleTodo}>add</button> */}
            <input type="submit" />
            <button onClick={clear}>clear</button>
            {todo.map((e)=>{
                return(
                    <>
                    
                    <div>task-{e.text}---task-desc{e.desc}</div>
                    {/* <div>taskDesc-{e}</div> */}
                    </>

)
})}
</form>

        </div>
    )
}

