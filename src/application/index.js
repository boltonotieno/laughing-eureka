import React, { Component, Fragment } from 'react';
import { Provider } from "react-redux"
import configureStore from "../root/store"
import  Header from "../components/header"
import Category from "./jokes/jokes-container"

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header>Laughing Eureka!</Header>
          <Category/>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
