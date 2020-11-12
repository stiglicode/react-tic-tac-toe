import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// style
import './style/css/main.css';

// views
// import Menu from './view/Menu';
import Game from './view/Game';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Redirect to="/game" />
            </Route>
            {/* <Route path="/menu" exact>
                <Menu />
            </Route> */}
            <Route path="/game" exact>
                <Game />
            </Route>
        </Switch>
    </Router>
);
export default App;