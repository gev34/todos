import {useState} from 'react'
import './TodoForm.css'

function TodoForm ({onAdd}){
    const[value , setValue] = useState('')


    return (
        <form onSubmit={(e) =>{
        e.preventDefault()
         if(value !== ""){
            onAdd(value)
         }
         setValue("")
        }}>
            <input type = "text" value = {value} onChange={(e) => {
                setValue(e.target.value)
            }}/>
            <button className='addbtn'>Add</button>
        </form>
    )
}
export default TodoForm;