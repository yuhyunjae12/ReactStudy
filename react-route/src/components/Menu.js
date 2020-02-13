import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Board">Board</Link></li>
                <li><Link to="/Board/test">Board test</Link></li>
                <li><Link to="/Board/test?no=1">Board test no 1</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;