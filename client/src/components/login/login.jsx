import React, { Component } from 'react';
import Header from '../header/header';
// import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="Login">
                    <p className="login-intro">
                        This is the login page.
                    </p>
                </div>
            </div>
        );
    }
}

export default Login;
