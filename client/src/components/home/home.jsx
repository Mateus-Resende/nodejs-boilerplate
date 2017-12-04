import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <p className="app-intro">
                Click <Link to='/login' >here</Link> to login
            </p>
        );
    }
}
export default Home;