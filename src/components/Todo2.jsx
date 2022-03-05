import {useState} from "react"

export const Todo2=()=>{
    const [text,setText]=useState("")
    const [desc,setDesc]=useState("")
    const [arr,setArr]=useState([])
    const handleText=(e)=>{
        setText(e.target.value)
    }

    const handleDesc=(e)=>{
        setDesc(e.target.value)
    }
    const clear=(e)=>{
        e.target.parentElement.remove()
    }
    const edit=()=>{

    }
    const submit=(e)=>{
        e.preventDefault()
        setArr([...arr,{title:text,desc:desc}])
        setDesc("")
        setText("")
    }
        

    return(
        <form onSubmit={submit}>
         <input type="text" placeholder="type your text" value={text} onChange={handleText} />
         <input type="text" placeholder="type your desc" value={desc} onChange={handleDesc} />
         <input type="submit" disabled={text.trim().length===0||desc.trim().length===0} />
         {arr.map((e)=>{
             return(
                 <div>
                     <div>{e.title}-----{e.desc}</div>
                     
                     <button onClick={clear}>clear</button>
                     <button onClick={edit}>  edit</button>
                 </div>
             )
         })}


            </form>
    )
}