import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router, NavLink } from 'react-router-dom';
import JokeList from "./components/JokeList";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <ul>
            <h1>Dad Jokes</h1>
            <NavLink to="/login">Log in</NavLink>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">Home</Route>
          <PrivateRoute exact path="/jokelist" component={JokeList}/>
          <Route path="/login" component={Login}></Route>-
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
