import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './components/app/app';
import Login from './components/login/login';
import registerServiceWorker from './scripts/registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
registerServiceWorker();