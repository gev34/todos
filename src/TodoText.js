import TodoList from "./TodoList";

function TodoText({todos , onDelete }){
    return (
        <div >
            {
                todos.map((todo) => {
                    return (
                        <TodoList todo = {todo} key ={todo.id}
                         onDelete = {onDelete}
                      />
                    )
                })
            }
        </div>
    )
}

export default TodoText;