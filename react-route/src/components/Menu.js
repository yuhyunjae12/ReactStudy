import React from 'react';
// NavLink import
import { NavLink } from 'react-router-dom';
// Link import
//import { Link } from 'react-router-dom';

// Link case
// const Menu = () => {
//     return (
//         <div>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/Board">Board</Link></li>
//                 <li><Link to="/Board/test">Board test</Link></li>
//                 <li><Link to="/Board/test?no=1">Board test no 1</Link></li>
//             </ul>
//             <hr/>
//         </div>
//     );
// };

// NavLink case
const Menu = () => {
    const activeStyle ={
        color: 'red',
        fontSize: '2rem'
    }

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/Board" activeStyle={activeStyle}>Board</NavLink></li>
                <li><NavLink exact to="/Board/test" activeStyle={activeStyle}>Board test</NavLink></li>
                <li><NavLink exact to="/Board/test?no=1" activeStyle={activeStyle}>Board test no 1</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;