import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Board } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home}  />
                <Switch>
                    <Route path='/board/:boardNo' component={Board} />
                    <Route path='/board' component={Board} />
                </Switch>
            </div>
        );
    }
}

export default App;