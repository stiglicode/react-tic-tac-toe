import React, { useState, useEffect } from 'react';

// Menu
import MainMenu from '../components/Menu/MainMenu'
import PvP from '../components/Menu/PvP';
import PvB from '../components/Menu/PvB';
import MP from '../components/Menu/Multiplayer';

// components 
import HomeReturn from './../components/HomeReturn';
import {PopUp, PopUpContainer} from './../components/PopUp';
import ValidPlayerPopUp from './../components/PopUp/ValidPlayersSymbolWindow';

// Logo 
import Logo from './../components/Logo';


const Menu = (props) => {
    const [title, setTitle] = useState('');
    const changeTitle = (titleName) => {
        setTitle(titleName);    
    }
    const [UImenuKey, setUIMenuKey] = useState(2);
    const changeMenu = (menuKey) => {
        setUIMenuKey(menuKey);
    }
    const [unsetSymbol, setUnsetSymbol] = useState([]);
    const replaceMenu = () => {
        if(UImenuKey === 1) {
            return(<MainMenu handleTitle={changeTitle} handleMenuChange={changeMenu}/>)
        }else if(UImenuKey === 2) {
            return (<PvP handleTitle={changeTitle} returnHandle={changeMenu} countPlayers={countedPlayers} actualPlayersNames={setPlyersNames} />)
        }else if(UImenuKey === 3) {
            return (<PvB handleTitle={changeTitle} returnHandle={changeMenu}/>)
        }else if(UImenuKey === 4) {
            return (<MP handleTitle={changeTitle} returnHandle={changeMenu}/>)
        }
    }
    const setPlyersNames = (data) => {
        return props.players(data);
    }
    const startGame = (boolen) => {
        if(boolen === true){
            return props.switchPath(1)
        }
    }
    const countedPlayers = (data) => {
        if(data._X_ === true && data._O_ === true) {
            return startGame(true)
        }else {
            var unsetNameArr = [];
            for (const key in data) {
                if(data[key] === false) {
                    const unsetName = key.split("_")[1];
                    unsetNameArr.push(unsetName);
                }
            }
            return setUnsetSymbol(unsetNameArr);
        }
    }
    const setName = (data) => {
        if(data === true){
            return setUnsetSymbol([]);
        } else {
            return startGame(true)
        }
    }
    return (
        <div className="menu-cont">
            {(unsetSymbol.length !== 0) && 
                <PopUp content={[
                    <PopUpContainer 
                        content={[<ValidPlayerPopUp reset={setName} symbol={unsetSymbol}/>]}
                        className={`border-${unsetSymbol}`}
                    />
                ]}/>
            }
            <div className="menu-logo">
                <Logo size="5em" />
            </div>
            <div className="menu-row column">
                <HomeReturn returnMenu={changeMenu} style={(UImenuKey === 1) ? {display: "none"} : null} />   
                <span className="menu-row_title b">{title}</span>
                {replaceMenu()}
                <span className="blockquote menu-row_footer">React mini-game&nbsp;&nbsp; | &nbsp;&nbsp;v1.0.0</span>
            </div>
        </div>
    )
};
    
export default Menu;