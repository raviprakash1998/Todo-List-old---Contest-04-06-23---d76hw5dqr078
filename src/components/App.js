import React from "react";
import "./../styles/App.css";

function App() 
{
	const [tasks, setTasks] = useState([]);
  	const [currentTask, setCurrentTask] = useState("");
  	const [editingTask, setEditingTask] = useState("");

  	const handleAddTask = () => {
    		if (currentTask.trim() !== "") {
      			setTasks([...tasks, { title: currentTask, isEditing: false }]);
      			setCurrentTask("");
    		}
 	};

  	const handleDeleteTask = (index) => {
    		const newTasks = [...tasks];
    		newTasks.splice(index, 1);
    		setTasks(newTasks);
  	};

  	const handleEditTask = (index) => {
    		const newTasks = [...tasks];
    		newTasks[index].isEditing = true;
    		setTasks(newTasks);
    		setEditingTask(newTasks[index].title);
  	};

  	const handleSaveTask = (index) => {
    		const newTasks = [...tasks];
    		if (editingTask.trim() !== "") {
      			newTasks[index].title = editingTask;
      			newTasks[index].isEditing = false;
      			setTasks(newTasks);
   		}
  	};

  	const handleEditChange = (event) => {
    		setEditingTask(event.target.value);
  	};

  	const handleTaskChange = (event) => {
    		setCurrentTask(event.target.value);
  	};

	return (
	<div id="main">
		<h1>To-Do List</h1>
      		<div>
        		<textarea
          		id="task"
          		placeholder="Enter task"
          		value={currentTask}
          		onChange={handleTaskChange}
        	/>
        	<button id="btn" onClick={handleAddTask}>Add Task</button>
      	</div>
     	<ul>
        	{tasks.map((task, index) => (
          	<li key={index} className="list">
            	{task.isEditing ? (
              	<div>
                	<textarea
                  	className="editTask"
                  	placeholder="Edit task"
                  	value={editingTask}
                  	onChange={handleEditChange}
                	/>
                	<button className="saveTask" onClick={() => handleSaveTask(index)}>Save</button>
              	</div>
            	) : (
              	<div>
                	{task.title}
                	<div>
                  		<button className="edit" onClick={() => handleEditTask(index)}>Edit</button>
                  		<button className="delete" onClick={() => handleDeleteTask(index)}>Delete</button>
                	</div>
              	</div>
            	)}
          	</li>
        	))}
      	</ul>
	</div>
	);
}


export default App;
