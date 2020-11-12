import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// style
import './style/css/main.css';

// views
import Game from './view/Game';
import Menu from './view/Menu';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Game />
            </Route>
            <Route path="/menu" exact>
                <Menu />
            </Route>
            <Route path="/game">
                <Game />
            </Route>
        </Switch>
    </Router>
);
export default App;