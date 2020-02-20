import React from 'react';
import Child from '../Child/Child';

function Board (){

    // background-color -> backgroundColor 카멜로 표기
    const style ={
        backgroundColor : 'red'
    }

    return(
        <div style={style}>
            Board
            <Child name="name">child</Child>
        </div>
    );
}

export default Board;