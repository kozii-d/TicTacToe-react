import React, {useCallback} from 'react';

const Cell = ({id, updateGamefield, isEndGame, value}) => {

    const changeCellValue = useCallback(
        () => {
            if (!value && !isEndGame) {
                updateGamefield(id)
            }
        },
        [value, isEndGame, id]
    );


    const classes = value ? 'cell cell_' + value : 'cell';

    return (
        <div onClick={changeCellValue}
             className={classes}
             id={id}>
            <p className={'cell__content'}>{value}</p>
        </div>
    );
}

export default Cell;