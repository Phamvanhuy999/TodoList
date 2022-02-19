import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import './App.css'
function App() {
  const [newtask, setNewTask] = useState([])
  const [tasks, setTasks] = useState([])
  function addtask() {
    setTasks([...tasks, newtask])
    
  }
  function deletetask(index) {
    var duplicatearray = [...tasks]
    duplicatearray.splice(index, 1)
    setTasks(duplicatearray)
    
  }
  const taskslist = tasks.map((object, index) => {
    return <div className='row justify-content-center'>
      <h1 className='col-md-6 '>{index + 1}. {object}</h1>
      <button onClick={() => { deletetask(index) }} className='btn btn-danger col-md-1 mb-2' >Delete</button>
    </div>
  })
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className='row justify-content-center'>
        <input type='text'
          placeholder='taskname'
          className='form-control '
          value={newtask}
          onChange={(e) => { setNewTask(e.target.value) }}
        />
        <button onClick={addtask} className='btn btn-success col-md-1 m-1'>Add</button>

      </div>
      {taskslist}
    </div>
  )
}

export default App
