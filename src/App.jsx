import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyNav from './component/MyNav';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <MyNav/>
        <Switch>
          <Route component={Login} path="/login"/>
          <Route component={Register} path="/register"/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
