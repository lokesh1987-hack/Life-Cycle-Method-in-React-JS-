import React from 'react';
import './App.css';
import Mounting from './Components/Mounting';
import Updating from './Components/Updating'; 
import Unmounting from './Components/Unmounting';
import { BrowserRouter as Router } from 'react-router-dom'
import  { Switch, Route } from 'react-router-dom'
import Header from './Components/Header';

function App() {
  return (
    <div>
    <Router> 
        <Header />
        <Route exact path="/" component={Mounting} /> 
        <Route exact path="/updating" component={Updating} /> 
        <Route exact path="/unmounting" component={Unmounting} />
    </Router>
    </div>
  );
}

export default App;
 