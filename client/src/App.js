import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import name from './components/Dashboard';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Dashboard/>
      </Provider>
    )
  }
}


export default App;
