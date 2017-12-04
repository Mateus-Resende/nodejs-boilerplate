import React, { Component } from 'react';
// import './login.css';

class Login extends Component {
    
    _renderLogin() {
    
    }
    
    _renderWelcome() {
    
    }
    
    _renderForm() {
    
    }
    
    
    render() {
        return (
            <div className="Login">
                <p className="login-intro">
                    This is the login page.
                </p>
            </div>
        );
    }
}

export const auth = {
    isAuthenticated: false,
    authenticate(username, password, cb) {
        this.isAuthenticated = true;
    }
};

export default Login;
