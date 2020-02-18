import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import RootStore from './stores';
// import CounterStore from './stores/counter';
// import MarketStore from './stores/market';

// const counter = new CounterStore();
// const market = new MarketStore();

const root = new RootStore();

ReactDOM.render(
    // <Provider counter={counter} market={market}>
    <Provider {...root}>
    <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
