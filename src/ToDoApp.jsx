// TodoApp.js
import React, { useState } from 'react';
import AddTask from './ToDoItem';

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, { text: task, completed: false }]); // Tarefa será um objeto com 'text' e 'completed'
  }

  function toggleTaskCompleted(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Atualiza o estado da tarefa como concluída/não concluída
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Remove a tarefa pelo índice
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <AddTask onAddTask={addTask} />
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTaskCompleted(index)} 
            />
            {task.text}
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
