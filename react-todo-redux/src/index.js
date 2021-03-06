import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import toDoApp from './reducers';

import createSagaMiddleware from 'redux-saga';
import { loadToDoList } from './actions';
import rootSaga from './sagas';

import { BrowserRouter } from 'react-router-dom';

const sagaMiddleware =createSagaMiddleware();

const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
