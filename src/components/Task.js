import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {
  return (
    <div onDoubleClick={() => onToggle(task.id)} className={`${task.reminder ? 'task-item-toggled' : 'task-item'}`}>
        <h3>
            <span>{task.text}</span>
            <FaTimes onClick={() =>onDelete(task.id)} style={{color: '#B70404', cursor: 'pointer'}}/>
        </h3>
        <p>{task.date}</p>
    </div>
  )
}

export default Task