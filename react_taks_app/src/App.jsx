import {Task} from './components/Task';
import { TaskForm } from "./components/TaskForm";

function App() {

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="w-4/5">
        <h1
          className="text-4xl font-bold text-center mb-4"
        >React App</h1>
        <TaskForm />
        <Task />
      </div>
    </div>
  )
}

export default App
