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
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <input ref="input" className={styles.Input} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
      </div>
    );
  }
}
