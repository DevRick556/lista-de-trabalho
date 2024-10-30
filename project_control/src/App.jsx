import { useState } from 'react'

import Todo from './components/tudu/todo'
import Todo_Form from './components/tudu/Todo_Form'
import Busca from './components/tudu/busca'
import Filter from './components/tudu/filter'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"criar funcionalidade",
      category:"Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text:"Ir pra academia",
      category:"pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text:"estudar",
      category:"estudo",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState('')  //procurar
  const[filter, setFilter] = useState('All')
  const[sort, SetSort] = useState('Asc')

  const addTodo = (text,category) => {
    const newTodo = [...todos,{
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted: false,
    },
  ]
  // console.log('Novo todo criado:', newTodo); // Verifica o objeto criado
  setTodos(newTodo);
  // console.log('Todos atualizados:', todos)

  }
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filterdTodos = newTodos.filter(todo => todo.id !==id ? todo : null)
    setTodos(filterdTodos)
  };
  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      return { ...todo, isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted };
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div className='app'>
        <h1>lista de tarefas</h1>
        <Busca  search={search} setSearch={setSearch}    />
        <Filter filter={filter} setFilter={setFilter}  setSort={SetSort} />
        
        <div  className='todo-list'>
          {todos
          .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted ) 
          .filter((todo) =>
           todo.text.toLowerCase().includes(search.toLowerCase()))
           .sort((a, b)=> sort === "Asc"
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text))

           .map((todo) =>(
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
        </div>
        <Todo_Form addTodo={addTodo} />
        
      </div>
    </>
  )
}

export default App
