import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import configureStore from './store/configureStore';
import App from './containers/App';

// Can pass an initial state
// const store = configureStore(initialState);
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/active' component={App}/>
        <Route path='/completed' component={App}/>
        <Route path='/all' component={App}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
