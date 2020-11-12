import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// style
import './style/css/main.css';

// views
<<<<<<< HEAD
// import Menu from './view/Menu';
import Game from './view/Game';
=======
import Menu from './view/Menu';
// import Game from './view/Game';
>>>>>>> main-menu

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Redirect to="/game" />
            </Route>
            {/* <Route path="/menu" exact>
                <Menu />
<<<<<<< HEAD
            </Route> */}
            <Route path="/game" exact>
=======
            </Route>
            {/* <Route path="/game">
>>>>>>> main-menu
                <Game />
            </Route> */}
        </Switch>
    </Router>
);
export default App;