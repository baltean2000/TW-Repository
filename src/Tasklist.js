import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';

const Tasklist = inject('store')(observer(({ store }) => {
  const { tasks, loadTasks } = store;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      store.loadTasks();
      setIsLoading(false);
    }, 2000);
  }, [store]);

  const addTask = (event) => {
    event.preventDefault();
    const taskInput = event.target.elements.task;
    const newTask = taskInput.value;
    store.addTask(newTask);
    taskInput.value = "";
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    store.loadTasks(); 
  };

  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
      <ul>
        {tasks ? tasks.map((task, index) => (
          <li key={index}>{task}</li>
        )) : null}
      </ul>
      <form onSubmit={addTask}>
        <input type="text" name="task" />
        <button type="submit">Adaugă sarcină nouă</button>
      </form> <button onClick={clearLocalStorage}>Golește local storage</button>
    </div>
  );
}));

export default Tasklist;
