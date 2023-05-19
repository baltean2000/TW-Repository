import { observable, action, makeObservable } from 'mobx';

class Store {
  tasks = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      deleteTask: action,
      loadTasks: action
    });
    this.loadTasks();
  }
 //Pentru a crea metode generice pentru stocarea datelor în localStorage, am adaugat metoda setData
  setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

getData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

  setLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  loadTasks() {
  const tasks = this.getData('tasks');
  if (tasks) {
    this.tasks = tasks;
  } else {
    this.tasks = [];
    this.setData('tasks', []);
  }
}


  addTask(task) {
  this.tasks.push(task);
  this.setData('tasks', this.tasks);
}

deleteTask(index) {
  this.tasks.splice(index, 1);
  this.setData('tasks', this.tasks);
}


  fetchTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      return Promise.resolve(JSON.parse(tasks));
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([]);
        }, 2000);
      });
    }
  }
}

const store = new Store();

export default store;
