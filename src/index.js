import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './router';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import registerServiceWorker from './registerServiceWorker'
// Redux Store对象，管理所有的Redux状态
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);
// ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
