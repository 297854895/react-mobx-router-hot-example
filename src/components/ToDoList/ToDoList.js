import React, {Component} from 'react';
import styles from './ToDoList.less';

import { inject, observer } from 'mobx-react';
@inject("store") @observer
export default class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store
    this.state = {
      value: ''
    }
  }
  handleChange = () => {
    this.setState({
      value: this.refs.input.value
    });
  }
  handleKeyDown = (evt) => {
    if (evt.which !== 13) return;
    this.store.addToDos(this.state.value);
    this.refs.input.value = '';
    this.setState({
      value: ''
    })
  }
  handleTodos = (idx) => {
    this.store.toggleToDos(idx);
  }
  deleteTodos = (idx) => {
    this.store.deleteTodos(idx);
  }
  filter = (filter) => {
    this.store.toggleFilter(filter);
  }
  render() {
    let handleSpan = [];
    ['All', 'Undone', 'Done'].forEach((item, idx) => {
      handleSpan.push(<span key={'TodoListfilter' + idx} onClick={this.filter.bind(this, item)} className={this.store.filter === item ? styles.spanActive : ''}>{item}</span>)
    });
    const curFilter = this.store.filter;
    const output = [];
    console.log(this.store);
    this.store.todos.forEach((item, idx) => {
      if (curFilter === 'Done' && !item.status) {
        return;
      }
      if (curFilter === 'Undone' && item.status) {
        return;
      }
      output.push(<li key={"todos"+idx} className={item.status ? styles.done : ''}>
        {item.text}
        <button onClick={this.deleteTodos.bind(this, idx)} className={styles.button}>Delete</button>
        <button onClick={this.handleTodos.bind(this, idx)} className={styles.button}>{item.status ? 'Enable' : 'Done'}</button>
      </li>);
    });
    if (this.store.todos.length === 0) {
      handleSpan = [];
    }
    return (
      <div>
        <h1 className={styles.title}>TodoList</h1>
        <input ref="input" placeholder="add todos" className={styles.input} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
        <div className={styles.handle}>
          {handleSpan}
        </div>
        <ul className={styles.wrap}>
          {output}
        </ul>
      </div>
    );
  }
}
