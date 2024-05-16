import { useState, useEffect } from "react";
import axios from 'axios';
import qs from 'qs';
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tasks');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [data]);

  const addTask = async () => {
    console.log("task:", todo)
    let data = qs.stringify({
      "task": todo
    });

    try {
      const response = await axios.post('http://localhost:8000/api/create_task', data);

      console.log('Response from server:', response.data);
      setTodo("");
      setData(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error, show error message, etc.
    }

  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${id}`);
      setData(data.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className=" bg-gradient-to-r from-blue-500 to-green-500 h-screen w-full">
      <h1 className="text-center text-3xl pt-4">TODO</h1>
      <div className="flex justify-center mt-[10vh]">
        <input
          className="w-[500px] h-[40px] p-4 rounded-md"
          type="text"
          placeholder="enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="bg-white ml-2 px-8 rounded-md cursor-pointer hover:scale-[1.05]" onClick={addTask}>Add</button>
      </div>
      <div className="flex justify-center">
        <ul className=" m-4 ml-8 overflow-y-auto w-[650px] h-[65vh]">
          {data.map((task) => (
            <li
              className="relative h-[80px] p-4  bg-white w-[600px] mx-4 my-2 rounded-md shadow-md duration-200 hover:scale-[1.03] "
              key={task._id}>
              <h2>{task.task}</h2>
             <span className="absolute right-6 top-6 duration-200 hover:scale-[1.09] cursor-pointer text-3xl" onClick={() => deleteTask(task._id)}><MdDelete /></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
