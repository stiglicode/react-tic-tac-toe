import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// style
import './style/css/main.css';

// views
import Menu from './view/Menu';
import Game from './view/Game';

const App = () => {
    const [activePath, setPath] = useState(0);
    const [playersN, setPlayers] = useState();
    const handleSwitchPath = (data) => {
       return setPath(data);
    }
    const handlePlayers = (data) => {
        for (const key in data) {
            if(data[key] === ""){
                data[key] = key[1];
            }
        }
        return setPlayers(data)
    }
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Game switchPath={handleSwitchPath} players={{_X_: "fuuuuuuck", _O_: "aaaaaaaaaaaaaaaaa"}} />
                    {/* {(activePath === 0) ? <Menu switchPath={handleSwitchPath} players={handlePlayers}/> : <Game switchPath={handleSwitchPath} players={playersN} />} */}
                </Route>
                {/* <Route path="/menu" exact>
                    <Menu />
                </Route>
                <Route path="/game" exact>
                    <Game />
                </Route> */}
            </Switch>
        </Router>
    )
};
export default App;