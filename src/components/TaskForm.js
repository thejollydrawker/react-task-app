import { useState } from "react"

import MaskedTextInput from "react-text-mask";



const TaskForm = ({onAdd}) => {

    const [text, setText ] = useState('')
    const [date, setDate ] = useState('')
    const [reminder, setReminder ] = useState('')
    const [showValidationError, setValidationError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (text) {
            onAdd({text, date, reminder});
            setText('');
            setDate('');
            setReminder(false);
            setValidationError(false);
        } else 
            setValidationError(true);
        
    }

  return (
    <form className="task-form" 
    onSubmit={onSubmit}
    onKeyDown={() => {setValidationError(false)}}    >
        <h3>
            Add new task
        </h3>
        <div className="task-form-field">
            <label className="task-form-label">
                Task <span style={{color: 'red'}}>*</span>
            </label>
            <input 
            type="text" 
            className="task-form-input"
            onChange={(event) => setText(event.target.value)}
            value={text}
            />
        </div>
        <div className="task-form-field">
            <label className="task-form-label">
                Date
            </label>
            {/* <input type="text" 
            className="task-form-input"
            placeholder='yyyy.mm.dd'
            onChange={(event) => setDate(event.target.value)}
            value={date}
            /> */}
            <MaskedTextInput
                type="text"
                className="task-form-input"
                placeholder="dd.mm.yyyy"
                mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
                onChange={(event) => setDate(event.target.value)}
                value={date}
            />
        </div>
         
        <div className="task-form-label task-form-inline-field">
            <label>
                Set reminder
            </label>
            <input 
            type="checkbox"
            className="task-form-input task-form-checkbox"
            onChange={(event) => setReminder(event.target.checked)}
            checked={ reminder }
            value={reminder}
            />
        </div>

        <input type='submit' 
        value='Save Task' className="button-save" />

        {
            showValidationError && 
            <p className="validation-error-msg">
                Please fill the form
            </p>
        }

        
    </form>
  )
}

export default TaskForm