import { useState } from 'react'
import React from 'react'


const Todo_Form = ({addTodo}) => {
    const[value, setValue] = useState("")
    const [category, setCategory] = useState("")
    // const [inputValue, setInputValue] = useState('');


    const HandleSubmite =(e)=>{
        e.preventDefault()
        if(!value || !category) return
        addTodo(value,category)
        setValue('')
        setCategory('')
        


    }

  return (
    <div className='todo_form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={HandleSubmite}>
            <input type="text" placeholder='digite o titulo' value={value} onChange={(e)=>setValue(e.target.value)}/>

            <select category={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type='submite'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default Todo_Form