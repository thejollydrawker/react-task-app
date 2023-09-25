import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';


function App() {
  const [showForm, setShowForm] = useState(false)
  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksServer = await fetchTasks();
      setTasks(tasksServer); 
    }

    getTasks();
  }, []);

const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  return await res.json()
}

const getTaskById = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  return await res.json()
}

const addTask = async (task) => {

  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  });

  const data = await res.json();

  setTasks([...tasks, data]);


  // const id = Math.floor(Math.random()*10000) + 1;
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])
}

const deleteTask = async (id) =>  {

  await  fetch(`http://localhost:5000/tasks/${id}`,
  {
    method: 'DELETE'
  });
  
  setTasks(tasks.filter((task) => task.id !== id));
}

const toggleReminder = async (id) => {

  const task = await getTaskById(id);

  const putPayload = {...task, reminder: !task.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,
  {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(putPayload)
  });

  const data =  await res.json()


  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
}

  return (
    <div className="App">
      <Header showAdd={showForm} title="Task Tracker" onAdd={() => setShowForm(!showForm)}/>
      {showForm && <TaskForm onAdd={addTask}/>}
      {
        tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : 'No Tasks'
      }
      
        </div>
  );
}

export default App;
