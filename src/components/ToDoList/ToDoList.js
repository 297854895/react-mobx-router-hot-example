import React, {Component} from 'react';
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
    console.log(this);
  }
  render() {
    return (
      <div>
        <input ref="input" onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
      </div>
    );
  }
}
