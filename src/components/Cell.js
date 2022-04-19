import React, {useState} from 'react';

const Cell = ({id, activePlayer, toggleActivePlayer, updateGamefield, increaseProgress, isEndGame, players}) => {

    const [value, setValue] = useState(null)

    const changeCellValue = () => {
        if (!value && !isEndGame) {
            setValue(() => activePlayer)
            updateGamefield(id, activePlayer)
            increaseProgress();
            toggleActivePlayer();
        }
    };

    const classes = value === players[0] ? 'cell cell_x' : 'cell cell_o';

    return (
        <div onClick={() => changeCellValue()}
             className={classes}
             id={id}>
            <p className={'cell__content'}>{value}</p>
        </div>
    );
}

export default Cell;