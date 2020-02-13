import React from 'react';
//query string import
import queryString from 'query-string';


// Ex. (params)
// const Board = ({match}) => {
//     return (
//         <div>
//             Board BoardNo : {match.params.boardNo}
//         </div>
//     );
// };

const Board = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);

    const no = query.no == 1;

    return (
        <div>
            Board BoardNo : {match.params.boardNo}
            query : {no && 'no:queryTest'}
        </div>
    );
};

export default Board;