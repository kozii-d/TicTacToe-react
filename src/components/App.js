import React, {useEffect, useState} from 'react';
import Cell from "./Cell";

const App = () => {

    const players = ['X', 'O']

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

    const [activePlayer, setActivePlayer] = useState(players[0]);
    const [winner, setWinner] = useState(null);
    const [progress, setProgress] = useState(0);
    const [isEndGame, setIsEndGame] = useState(false);
    const [gamefield, setGamefield] = useState([
        null, null, null,
        null, null, null,
        null, null, null
    ]);
    const [cells, setCells] = useState([]);

    const checkCombos = () => {
        combos.forEach(combo => {
            if (gamefield[combo[0]] === players[0] && gamefield[combo[1]] === players[0] && gamefield[combo[2]] === players[0]) {
                setWinner(() => players[0])
            }
            if (gamefield[combo[0]] === players[1] && gamefield[combo[1]] === players[1] && gamefield[combo[2]] === players[1]) {
                setWinner(() => players[1])
            }
        });
    };

    const checkEndGame = () => {
        if (winner || progress >= 9) {
            setIsEndGame(() => true);
        }
    };

    const increaseProgress = () => {
        setProgress(state => ++state);
    }

    const updateGamefield = (id, value) => {
        setGamefield((state) => {
            const newState = [...state];
            newState[id] = value;
            return newState
        })
    };

    const toggleActivePlayer = () => {
        if (activePlayer === players[0]) {
            setActivePlayer(() => players[1]);
        }
        if (activePlayer === players[1]) {
            setActivePlayer(() => players[0]);
        }
    };

    const createCells = () => {
        setCells(() => {
            const newState = [];
            for (let i = 0; i < 9; i++) {
                newState.push(<Cell
                    key={i}
                    id={i}
                    activePlayer={activePlayer}
                    toggleActivePlayer={toggleActivePlayer}
                    updateGamefield={updateGamefield}
                    increaseProgress={increaseProgress}
                    isEndGame={isEndGame}
                    players={players}
                />);
            }
            return newState;
        })
    }

    useEffect(() => {
        createCells();
        checkCombos();
        checkEndGame();
    }, [activePlayer]);

    useEffect(() => {
        checkEndGame();
    }, [winner]);

    useEffect(() => {
        createCells();
    }, [isEndGame]);

    const winnerText = winner ? `Winner is player '${winner}'!` : 'Draw!';
    const activePlayerText = `Active player: '${activePlayer}'`

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