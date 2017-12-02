import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './header.css'

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h1 className="app-title">Welcome to React</h1>
            </header>
        )
    }
}

export default Header;