import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {Details, Search, Home } from './pages'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/"  component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/details" component={Details}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
