import React from 'react';

const Board = ({match}) => {
    return (
        <div>
            Board BoardNo : {match.params.boardNo}
        </div>
    );
};

export default Board;