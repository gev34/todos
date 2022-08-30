
import { useState } from 'react';
import './App.css';
import TodoText from './TodoText'
import TodoForm from './TodoForm'


function App() {
  const [todos , setTodos] = useState([])
 
  return (
    <div className="App">
      <TodoForm onAdd = {(value) =>{
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text:value,
          }
        ])
      }}/>
      <TodoText todos = {todos}
        onDelete = {(todo) =>{
          setTodos(todos.filter((t) =>  t.id !== todo.id ))
        }}
        />
    </div>
  );
}

export default App;
