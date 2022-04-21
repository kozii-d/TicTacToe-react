import React, {useMemo} from 'react';
import Cell from "../Cell";

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

const App = ({toggleActivePlayer, restart, updateGamefield, gamefield, activePlayer}) => {

    const handleUpdateGamefield = (id) => {
        const newState = [...gamefield];
        newState[id] = activePlayer;
        toggleActivePlayer();
        updateGamefield(newState);
    };

    const progress = useMemo(() => {
        return gamefield.reduce((count, cell) => cell ? count + 1 : count, 0);
    }, [gamefield]);
    const winner = useMemo(() => getWinner(gamefield), [gamefield]);
    const isEndGame = useMemo(() => winner || progress >= 9, [winner, progress]);

    const cells = useMemo(() => {
        const cellsArray = [];
        for (let i = 0; i < 9; i++) {
            cellsArray.push(<Cell
                key={i}
                id={i}
                updateGamefield={handleUpdateGamefield}
                isEndGame={isEndGame}
                value={gamefield[i]}
            />);
        }
        return cellsArray;
    }, [gamefield, isEndGame, handleUpdateGamefield]);


    const winnerText = useMemo(() => winner ? `Winner is player '${winner}'!` : 'Draw!', [winner]);
    const activePlayerText = useMemo(() => `Active player: '${activePlayer}'`, [activePlayer]);

    return (
        <div className={'wrapper'}>
            <h1 className={'info'}>{isEndGame ? winnerText : activePlayerText}</h1>
            <div className={'gamefield'}>
                {cells}
            </div>
            {isEndGame
                ? <button
                    className={'restart-btn'}
                    onClick={restart}>Play again!</button>
                : null
            }
        </div>
    )
}

export default App;