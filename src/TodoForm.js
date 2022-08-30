import {useState} from 'react'


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
            <button>Add</button>
        </form>
    )
}
export default TodoForm;