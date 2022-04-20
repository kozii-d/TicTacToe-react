import React, {useMemo} from 'react';
import Cell from "./Cell";
import {useDispatch, useSelector} from "react-redux";

export const PLAYER_X = 'X';
const PLAYER_O = 'O';

export const players = [PLAYER_X, PLAYER_O];

const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const getWinner = (gamefield) => {

    for (const combo of combos) {
        if (gamefield[combo[0]] === players[0] && gamefield[combo[1]] === players[0] && gamefield[combo[2]] === players[0]) {
            return players[0];
        }
        if (gamefield[combo[0]] === players[1] && gamefield[combo[1]] === players[1] && gamefield[combo[2]] === players[1]) {
            return players[1];
        }
    }
    return null;
};

const App = () => {

    const dispatch = useDispatch();
    const gamefield = useSelector(state => state.gamefieldReducer.gamefield);
    const activePlayer = useSelector(state => state.activePlayerReducer.activePlayer);

    const toggleActivePlayer = () => {
        if (activePlayer === PLAYER_O) {
            dispatch({type: 'TOGGLE_ACTIVE_PLAYER', payload: PLAYER_X})
        }
        if (activePlayer === PLAYER_X) {
            dispatch({type: 'TOGGLE_ACTIVE_PLAYER', payload: PLAYER_O})
        }
    };

    const updateGamefield = (id) => {
        const newState = [...gamefield];
        newState[id] = activePlayer;
        toggleActivePlayer();
        dispatch({type: 'UPDATE_GAMEFIELD', payload: newState})
    };

    // const updateGamefield = useCallback((id) => {
    //     setGamefield((state) => {
    //         const newState = [...state];
    //         newState[id] = activePlayer;
    //         return newState;
    //     });
    //     toggleActivePlayer();
    // }, [activePlayer, toggleActivePlayer]);

    //
    // const [activePlayer, setActivePlayer] = useState(players[0]);
    // const [gamefield, setGamefield] = useState([
    //     null, null, null,
    //     null, null, null,
    //     null, null, null
    // ]);

    const progress = useMemo(() => {
        return gamefield.reduce((count, cell) => cell ? count + 1 : count, 0);
    },[gamefield]);
    const winner = useMemo(() => getWinner(gamefield), [gamefield]);
    const isEndGame = useMemo(() => winner || progress >= 9, [winner, progress]);

    // const toggleActivePlayer = useCallback(() => {
    //     if (activePlayer === players[0]) {
    //         setActivePlayer(players[1]);
    //     }
    //     if (activePlayer === players[1]) {
    //         setActivePlayer(players[0]);
    //     }
    // }, [activePlayer]);

    // const updateGamefield = useCallback((id) => {
    //     setGamefield((state) => {
    //         const newState = [...state];
    //         newState[id] = activePlayer;
    //         return newState;
    //     });
    //     toggleActivePlayer();
    // }, [activePlayer, toggleActivePlayer]);

    const cells = useMemo(() => {
        const newState = [];
        for (let i = 0; i < 9; i++) {
            newState.push(<Cell
                key={i}
                id={i}
                updateGamefield={updateGamefield}
                isEndGame={isEndGame}
                value={gamefield[i]}
            />);
        }
        return newState;
    }, [gamefield, isEndGame, updateGamefield]);

    const winnerText = useMemo(() => winner ? `Winner is player '${winner}'!` : 'Draw!', [winner]);
    const activePlayerText = useMemo(() => `Active player: '${activePlayer}'`, [activePlayer]);

    return (
        <div className={'wrapper'}>
            <h1 className={'info'}>{isEndGame ? winnerText : activePlayerText}</h1>
            <div className={'gamefield'}>
                {cells}
            </div>
        </div>
    )
}

export default App;