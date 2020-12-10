import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

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
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/WorkOut" component={Workout}></Route>
              <Route path="/Diet" component={Diet}></Route>
              <Route path="/connect" component={Connect}></Route>
            </Switch>
        </Router>
    );
  }
}

export default App;