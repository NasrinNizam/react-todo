import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";

import './todo.css'
import { useSelector } from 'react-redux';

export const ToDo = () => {
  // ======== get data from redux
  // const data = useSelector((state)=>state.counter.value)
  // console.log(data)
  // ======== react variables
  const [tasks, setTasks] =useState([])
  const [newTask, setNewTask] = useState('')

  // ========= functions
  const handleInput=(e)=>{
    setNewTask(e.target.value)
  }
  const handleAddTask=(e)=>{
    e.preventDefault()
    if(newTask){
      setTasks([...tasks, newTask])
      setNewTask('')
    }
    else{
      alert('Please enter a task')
    }
  }
  return (
    <section className='mainToDo'>
      <div className="container">
        <div className="mainn">
         <div className="card" >
            <h1 className='headings'>To-Do List</h1>
            <div className="list">
              <input onChange={handleInput} type="text" placeholder="Add a task..." />
              <button onClick={handleAddTask}>Add</button>
            </div>
            <div className="task">
              {
                tasks.map((task, index) => (
                  <div key={index} className="taskItem">
                    <div className="flex items-center gap-1 ">
                     <input type="checkbox" />
                     <p>{task}</p>
                    </div>
                    <div className="flex items-center gap-2">
                     <FaRegPenToSquare  className='text-xl text-green-700' />
                     <MdDelete className='text-2xl text-red-700' />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
