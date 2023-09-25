import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {
  return (
    <div onDoubleClick={() => onToggle(task.id)} className={`${task.reminder ? 'toggleTask' : ''}`}>
        <h3>
            {task.text}
            <FaTimes onClick={() =>onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}}/>
        </h3>
        <p>{task.date}</p>
    </div>
  )
}

export default Task