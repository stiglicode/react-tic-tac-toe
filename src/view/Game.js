import React, { useState, useEffect} from 'react';
// Header 
import HeaderMenu from './../components/HeaderMenu';
// PLayfield
import TurnDisplay from './../components/TurnDisplay';
import Field from './../components/Field';
import Stats from './../components/Stats';

import { randomize as randomSymbol} from './../randomize'
import { temp_3x3 as temp } from '../components/Field/Square/grid-template'; 

import RoundPopUp, {AlertSectionWin, AlertSectionLose} from './../components/PopUp/RoundWindow';
import {PopUp, PopUpContainer} from './../components/PopUp';

const Game = (props) => {
    const tempDetails = {
        grid: temp.grid,
        sheet: temp.sheet,
    }
    // Functions
    const initialTurn = () => {
        const turnNum = randomSymbol(1,2);
        return (turnNum === 1) ? "X" : "O"
    }
    const initialTurnSheet = (rawString, rawSuffix) => {
        return `${rawSuffix}-${rawString}`
    }
    const initSymbol = initialTurn();
    // States
    const [symbol, setSymbol] = useState(initSymbol);
    const [victoryStatus, setVictoryStatus] = useState({
        is_victory: null,
        victorySymb: null,
    });
    const [resetGame, setResetGame] = useState(null);
    const [countedGames, countGames] = useState([]);
    const [wonPlayerName, setPlayerName] = useState([]);
    // Call backs
    const callBackCountedGames = (data) => {
        return countGames(data);
    }
    const callBackSymbol = (data) => {
        setSymbol(data);
    }
    const callBackStatus = (data) => {
        const {winnerStatus, winnerSymbol} = data;
        if(victoryStatus.is_victory === null) {
            return setVictoryStatus({
                is_victory: winnerStatus,
                victorySymb: winnerSymbol,
            })
        }
    }     
    const callBackReset = (data) => {
        if(data === false) {
            setVictoryStatus({
                is_victory: null,
                victorySymb: null
            })
            setResetGame(true);
            return setTimeout(() =>{
                props.switchPath(0)
            }, 100)
        }else if(data === true) {
            setVictoryStatus({
                is_victory: null,
                victorySymb: null
            })
            return setResetGame(data)
        }
    }
    const callBackPlayers = (data) => {
        if(victoryStatus.is_victory){
            return setPlayerName(data)
        }
    }
    // Methods
    useEffect(() => {
        if(resetGame === true){
            for(let i = 0; i < temp.grid.length; i++){
                temp.grid.splice(i, 1, null);
            }
            setResetGame(null);
        }
    })
    const [opacityValue, setOpacity] = useState(false);
    const [typeOfWidnow, setType] = useState(null);

    const __childUseEffect = (data) => {
        if(data) {
            setTimeout(() => {
                setOpacity(data);
            },3000)
            if(typeOfWidnow === null) {
                setType(victoryStatus.is_victory)
            }
        }else if(!data){
            setOpacity(data);
            setType(null)
        }
    }
    return (
    <div className="game-wrapper column">
        <HeaderMenu gameStatus={countedGames}/>
        <div className={`playfield bs-padd ${initialTurnSheet(symbol, "player")}`}>
            <TurnDisplay symbol={symbol} playerName={props.players}/>
            <Field 
                template={tempDetails} 
                sheet={initialTurnSheet(symbol, "set")} 
                symbol={symbol} 
                returnSymbol={callBackSymbol}
                status={callBackStatus}
                resetField={resetGame}
                countedGames={callBackCountedGames}
                playersNames={props.players}
                returnPlayers={callBackPlayers}
            />
            <Stats winnerDetails={victoryStatus} countedGames={countedGames} players={wonPlayerName}/>
        </div>
        {(victoryStatus.is_victory !== null) && <PopUp isMounted={__childUseEffect} content={[
            (typeOfWidnow === true) ? <AlertSectionWin symbol={victoryStatus.victorySymb} /> : <AlertSectionLose />,
            <PopUpContainer 
                className={`border-${victoryStatus.victorySymb}, victory-popUp`} 
                style={{opacity: (!opacityValue) ? 0 : 1}}
                content={[<RoundPopUp reset={callBackReset} windowType={typeOfWidnow} symbol={victoryStatus.victorySymb} players={props.players}/>]}
            />
            
        ]}/>}
    </div>
    )
};
// class Game extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             symbol: this.initialTurn(),
//             victoryStatus: {
//                 is_victory: null,
//                 victorySymb: null,
//                 victoryName: []
//             },
//             resetGame: null,
//             countedGames: [],
//             opacityValue: false,
//             typeOfWidnow: null
//         }
//         this.tempDetails = {
//             grid: temp.grid,
//             sheet: temp.sheet,
//         }
//     }
//     // Callbacks
//     callBackCountedGames = (data) => {
//         return this.setState((state,) => { 
//             return {  
//                 ...state,
//                 countedGames: data
//             }
//         });
        
//     }
//     callBackSymbol = (data) => {
//         return this.setState((state,) => { 
//             return {  
//                 ...state,
//                 symbol: data
//             }
//         });
//     }
//     callBackStatus = (data) => {
//         const {winnerStatus, winnerSymbol} = data;
//         if(this.state.victoryStatus.is_victory === null) {
//             return this.setState((state,) => { 
//                 return {  
//                     ...state,
//                     victoryStatus: {
//                         is_victory: winnerStatus,
//                         victorySymb: winnerSymbol,
//                         victoryName: []
//                     },
//                 }
//             });
//         }
//     }     
//     callBackReset = (data) => {
//         if(data === false) {
//             this.setState((state,) => { 
//                 return {  
//                     ...state,
//                     victoryStatus: {
//                         is_victory: null,
//                         victorySymb: null,
//                         victoryName: []
//                     },
//                     resetGame: true
//                 }
//             });
//             return setTimeout(() =>{
//                 this.props.switchPath(0)
//             }, 100)
//         }else if(data === true) {
//             return this.setState((state,) => { 
//                 return {  
//                     ...state,
//                     victoryStatus: {
//                         is_victory: null,
//                         victorySymb: null,
//                         victoryName: []
//                     },
//                     resetGame: data
//                 }
//             });
//         }
//     }
//     __childUseEffect = (data) => {
//         if(data) {
//             setTimeout(() => {
//                 return this.setState((state,) => { 
//                     return {  
//                         ...state,
//                         opacityValue: data
//                     }
//                 });
//             },3000)
//             if(this.state.typeOfWidnow === null) {
//                 return this.setState((state,) => { 
//                     return {  
//                         ...state,
//                         typeOfWidnow: this.victoryStatus.is_victory
//                     }
//                 });
//             }
//         }else if(!data){
//             return this.setState((state,) => { 
//                 return {  
//                     ...state,
//                     opacityValue: data,
//                     typeOfWidnow: null
//                 }
//             });
//         }
//     }
//     // Methods
//     initialTurn = () => {
//         const turnNum = randomSymbol(1,2);
//         return (turnNum === 1) ? "X" : "O"
//     }
//     initialTurnSheet = (rawString, rawSuffix) => {
//         return `${rawSuffix}-${rawString}`
//     }
//     // Render
//     render() {
//         return (
//             <div className="game-wrapper column">
//                 <HeaderMenu />
//                 <div className={`playfield bs-padd ${this.initialTurnSheet(this.state.symbol, "player")}`}>
//                     <TurnDisplay symbol={this.state.symbol} playerName={this.props.players}/>
//                     <Field 
//                         template={this.tempDetails} 
//                         sheet={this.initialTurnSheet(this.state.symbol, "set")} 
//                         symbol={this.state.symbol} 
//                         returnSymbol={this.callBackSymbol}
//                         status={this.callBackStatus}
//                         resetField={this.state.resetGame}
//                         countedGames={this.callBackCountedGames}
//                     />
//                     <Stats winnerDetails={this.state.victoryStatus} countedGames={this.state.countedGames} players={this.props.players}/>
//                 </div>
//                 {(this.state.victoryStatus.is_victory !== null) && <PopUp isMounted={this.__childUseEffect} content={[
//                     (this.state.typeOfWidnow === true) ? <AlertSectionWin symbol={this.state.victoryStatus.victorySymb} /> : <AlertSectionLose />,
//                     <PopUpContainer 
//                         className={`border-${this.state.victoryStatus.victorySymb}, victory-popUp`} 
//                         style={{opacity: (!this.state.opacityValue) ? 0 : 1}}
//                         content={[<RoundPopUp reset={this.callBackReset} windowType={this.state.typeOfWidnow} symbol={this.state.victoryStatus.victorySymb} players={this.props.players}/>]}
//                     />
                    
//                 ]}/>}
//             </div>
//             )
//     }

// }
export default Game;