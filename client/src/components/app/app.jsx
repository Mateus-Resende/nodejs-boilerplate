import React, { Component } from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <p className="app-intro">
                    Click <Link to='/login' >here</Link>
                </p>
            </div>
        );
    }
}

export default App;
