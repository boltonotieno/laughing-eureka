import React, { Component, Fragment } from 'react';
import { Provider } from "react-redux"
import configureStore from "./redux/store"
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div className="App">
            <h1>Laughing Eureka</h1>
          </div>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
