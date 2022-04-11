import {  useRef } from 'react'
import './Style.css'
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}
const InputField = ({todo,setTodo,handleAdd}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null)


  return (
    <form className='input' onSubmit={(e)=>{handleAdd(e);
  inputRef.current?.blur()}}>
<input type="input" placeholder="Enter the task" className="input__box" 
ref={inputRef}
value={todo}
 onChange={(e)=>setTodo(e.target.value)}
 />
<button className="input_submit" type="submit">Go</button>
<ul>
 
</ul>
    </form >

  )
}

export default InputField