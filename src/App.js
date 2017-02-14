import React, {Component} from 'react';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';
import { Provider, observer } from 'mobx-react';
import State from './store/State';

import Index from './containers/Index/Index';
import NotFound from './containers/NotFound/NotFound';

const state = new State();
@observer
export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = state
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router history={browserHistory}>
          <Route>
            <Route path="/" component={Index} {...this.props}/>
            <Route path="*" component={NotFound} status={404} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
