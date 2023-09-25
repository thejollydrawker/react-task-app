import React from 'react'
import Task from './Task'


function Tasks({tasks, onDelete, onToggle}) {

  return (
    <>
       {tasks.map((task) => (<Task onDelete={onDelete} onToggle={onToggle} key={ task.id } task={task}/> ))} 
    </>
  )
}

export default Tasks