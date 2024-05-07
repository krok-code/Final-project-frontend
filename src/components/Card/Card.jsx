import React from 'react';
import { Wrapper , Container , h1 ,} from './Card.styled.jsx';
import { ReactComponent as Arrowcircle } from '.../assets/fonts/images/card/arrowcircle';
import { ReactComponent as Trash } from '.../assets/fonts/images/card/trash';
import { ReactComponent as Pencil } from '.../assets/fonts/images/card/pencil';

function TaskList() {
  const [tasks, setTasks] = useState([

  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: '',
    deadline: ''
  });

  const handleInputChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask({ title: '', description: '', priority: '', deadline: '' });
  };

  return (
    <Wrapper>
      {tasks.map((task, index) => (
        <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Deadline: {task.deadline}</p>
          <Arrowcircle />
          <Pencil />
          <Trash />
        </div>
      ))}
      <form onSubmit={handleFormSubmit}>
        <input name="title" value={newTask.title} onChange={handleInputChange} placeholder="Title" required />
        <textarea name="description" value={newTask.description} onChange={handleInputChange} placeholder="Description" required />
        <input name="priority" value={newTask.priority} onChange={handleInputChange} placeholder="Priority" />
        <input name="deadline" value={newTask.deadline} onChange={handleInputChange} placeholder="Deadline" />
        <button type="submit">Add Task</button>
      </form>
    </Wrapper>
  );
}

export default TaskList;