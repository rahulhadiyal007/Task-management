import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';

function App() {
  return (
   
    <TaskProvider>
       
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Task Manager</h2>
      <AddTask />
      <TaskList />
    </div>
  </TaskProvider>



  );
}

export default App;
