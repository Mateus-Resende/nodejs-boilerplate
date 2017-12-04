import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './app.css';

import Header from '../header/header';
import Home from '../home/home';
import Login from "../login/login";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
            </div>
        );
    }
}

export default App;
