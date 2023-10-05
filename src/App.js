import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import './App.scss'


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
    <Router>
    <div className="App">
      <Header showAdd={showForm} title="Task Tracker" onAdd={() => setShowForm(!showForm)}/>

    
      <Routes>
        <Route path="/" exact element={
          <>
            <main className='app-main'>
              <section className='task-list'>
              {
                tasks.length > 0 
                ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
                : 'No Tasks'
              }
              </section>
              {showForm && <TaskForm onAdd={addTask}/>}

            </main>
          </>
        }></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>


      <Footer />
      
    </div>
    </Router>
  );
}

export default App;
