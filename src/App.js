import React, { Component } from 'react';
import './App.css';
import store from './store/';
import Report from './Report';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Report />
        </Provider>
      </div>
    );
  }
}
export default App;
