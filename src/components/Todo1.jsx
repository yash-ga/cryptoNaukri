import { useState } from "react";

export const Todo1 = () => {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [todo, setTodo] = useState([]);
  const handleText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const handleD = (e) => {
    setDesc(e.target.value);
  };
  const handleTodo = (e) => {
    e.preventDefault();
   
    // setTodo([...todo, text, desc]);
    setTodo([...todo,{title:text,desc:desc}])
    console.log(todo)
    setText("");
    setDesc("");
  };
  const clear = () => {
    setTodo([]);
  };
  return (
    <div>
      <form onSubmit={handleTodo}>
        <h1>todo123</h1>
        <input
          type="text"
          placeholder="text"
          value={text}
          onChange={handleText}
        />
        <input type="text" placeholder="des" value={desc} onChange={handleD} />

        <input type="submit" disabled={text.trim().length===0 || desc.trim().length===0} />
        <button onClick={clear}>clear</button>
        {todo.map((element, index) => {
            return (
                <>
                  <div key={index}>{element.title}-{element.desc}
                  <button>complete</button>
                  <button>delete</button>
                  </div>
                </>
              );
         
        })}
      </form>
    </div>
  );
};
