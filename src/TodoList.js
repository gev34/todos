import'./TodoList.css';



function TodoList ({todo , onDelete }){
    return (
        <div >
            <label>
                <input type = "checkbox" />
                
                    {todo.text}
                <button onClick={() =>{
                    onDelete(todo);
                }}>X</button>
            </label>
        </div>
    )
}
export default TodoList ;