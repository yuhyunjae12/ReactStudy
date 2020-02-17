import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

export default class Navigation extends Component {
    render() {
        return (
            <NavigationBar>
                <Link className="btn btn-primary" to="/">
                    Todo List
                </Link>
                <Link className="btn btn-secondary" to="/new-item">
                    + ADD
                </Link>
            </NavigationBar>
        )
    }
}
