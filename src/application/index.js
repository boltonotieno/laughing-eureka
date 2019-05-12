import React, { Component, Fragment } from 'react';
import { Provider } from "react-redux"
import configureStore from "../root/store"
import  Header from "../components/header"
import Categories  from "./jokes/jokes-container"
import 'semantic-ui-css/semantic.min.css'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header>Laughing Eureka!</Header>
          <Categories />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
