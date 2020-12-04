import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import Connect from './pages/Connect/Connect'
import Diet from "./pages/Diet/Diet";
import Home from './pages/Home/Home'
import Workout from "./pages/Workout/Workout";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
        <Router>
          <Navbar />
          <div className="container pt-1">
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/WorkOut" component={Workout}></Route>
              <Route path="/Diet" component={Diet}></Route>
              <Route path="/connect" component={Connect}></Route>
            </Switch>
          </div>
          <footer>&copy; 2020 All rights reserved</footer>
        </Router>
    );
  }
}

export default App;