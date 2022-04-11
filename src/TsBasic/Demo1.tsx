import React, { useState } from "react";

// interface demoProps{
//     name:string;
//     age:Number;
// }
// You can also do like this
type demo1props = {
  name: string;
  age: number;
  status: "coder" | "Youtube" | "Trader";
};
const Demo1 = (props: demo1props) => {
  const [todo, setTodo] = useState<string>('');
  const [todoList,setTodoList] = useState<string[]>([]);

const addTodo=()=>{
    setTodoList([...todoList,todo])
    setTodo('')
};
const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTodo(e.target.value)
}
  return (
    <main style={{ border: "2px solid" }}>
      {/* Types Around Props */}
      <section>
        <i>My name is {props.name || "User"}</i>
        <br />
        <i>My age is {props.age}</i>
        <br />
        <i>I am a {props.status}.</i>
      </section>

      {/* Types in State */}
      <section>
        <input
          type="text"
          placeholder="to do list"
          value={todo}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Add</button>
        <ul>
            {todoList.map(item =>{
                return <li key={Math.random()}><b>{item}</b></li>
            })}
        </ul>
      </section>
    </main>
  );
};

export default Demo1;
