// AddTask.js
import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');

  function handleAddTask() {
    if (task.trim()) {
      onAddTask(task);
      setTask(''); // Limpa o input após adicionar
    }
  }

  return (
    <div>
      <input 
        type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Digite uma tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>
    </div>
  );
}

export default AddTask;
