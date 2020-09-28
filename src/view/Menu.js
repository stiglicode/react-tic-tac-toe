import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Menu
import MainMenu from '../components/Menu/MainMenu'
import PvP from '../components/Menu/PvP';
import PvB from '../components/Menu/PvB';
import MP from '../components/Menu/Multiplayer';

// components 
import HomeReturn from './../components/HomeReturn';

// Logo 
import Logo from './../components/Logo';


const Menu = () => {
    const [title, setTitle] = useState('');
    const changeTitle = (titleName) => {
        setTitle(titleName);    
    }
    const [UImenuKey, setUIMenuKey] = useState(1);
    const changeMenu = (menuKey) => {
        setUIMenuKey(menuKey);
    }
    const replaceMenu = () => {
        if(UImenuKey === 1) {
            return(<MainMenu handleTitle={changeTitle} handleMenuChange={changeMenu}/>)
        }else if(UImenuKey === 2) {
            return (<PvP handleTitle={changeTitle} returnHandle={changeMenu}/>)
        }else if(UImenuKey === 3) {
            return (<PvB handleTitle={changeTitle} returnHandle={changeMenu}/>)
        }else if(UImenuKey === 4) {
            return (<MP handleTitle={changeTitle} returnHandle={changeMenu}/>)
        }
    }
    return (
        <div className="menu-cont">
            <div className="menu-logo">
                <Logo size="5em" />
            </div>
            <div className="menu-row column">
                <HomeReturn returnMenu={changeMenu} style={(UImenuKey === 1) ? {display: "none"} : null} />   
                <span className="menu-row_title b" >{title}</span>
                {replaceMenu()}
                <span className="blockquote menu-row_footer">React mini-game&nbsp;&nbsp; | &nbsp;&nbsp;v1.0.0</span>
            </div>
        </div>
    )
};
    
export default Menu;