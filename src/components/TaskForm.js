import { useState } from "react"


const TaskForm = ({onAdd}) => {

    const [text, setText ] = useState('')
    const [date, setDate ] = useState('')
    const [reminder, setReminder ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if (text) {
            onAdd({text, date, reminder});
            setText('');
            setDate('');
            setReminder(false);
        }else{
            alert('Please fill the form')
        }
    }

  return (
    <form className="" 
    onSubmit={onSubmit}>
        <div>
            <label>
                Task
            </label>
            <input 
            type="text" 
            placeholder='Add Task'
            onChange={(event) => setText(event.target.value)}
            value={text}
            />
        </div>
        <div>
            <label>
                Date/Time
            </label>
            <input type="text" 
            placeholder='Add Date'
            onChange={(event) => setDate(event.target.value)}
            value={date}
            
            />
        </div>
        <div>
            <label>
                Set reminder
            </label>
            <input 
            type="checkbox"
            onChange={(event) => setReminder(event.target.checked)}
            checked={ reminder }
            value={reminder}
            />
        </div>

        <input type='submit' 
        value='Save Task' />
    </form>
  )
}

export default TaskForm