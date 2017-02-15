import { observable, action } from 'mobx'

class State {
  @observable todos
  @observable filter

  constructor() {
    this.todos = []
    this.filter = 'All'
  }

  @action toggleFilter(filter) {
    this.filter = filter;
  }

  @action addToDos(data) {
    this.todos.push({text: data, status: false});
  }

  @action toggleToDos(idx) {
    this.todos[idx].status = !this.todos[idx].status;
  }

  @action deleteTodos (idx) {
    const length = this.todos.length;
    if (idx > 0 && idx < length) {
      const arr_0 = this.todos.slice(0, idx);
      const arr_1 = this.todos.slice(idx + 1, length);
      this.todos = arr_0.concat(arr_1);
      return;
    }
    if (idx === 0) {
      this.todos = this.todos.slice(1, length);
      return;
    }
    this.todos = this.todos.slice(0, length - 1);
  }

}

export default State;
