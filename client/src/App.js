import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from "./componenets/layout/Landing";
import Navbar from "./componenets/layout/Navbar";
import Register from "./componenets/auth/Register";
import Login from "./componenets/auth/Login";
import Alert from "./componenets/layout/Alert";
//Redux
import { Provider } from 'react-redux';
import store from './store';
const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
)

export default App;
