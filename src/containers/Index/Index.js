import React, {Component} from 'react';
import ToDoList from '../../components/ToDoList/ToDoList';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ToDoList {...this.props}/>
      </div>
    );
  }
}
