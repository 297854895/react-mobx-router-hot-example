import { observable, action } from 'mobx'

class State {
  @observable number

  constructor() {
    this.number = 0
  }

  @action addData(data) {
    this.number += 1
  }

}

export default State;
