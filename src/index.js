import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk, ReduxPromise)
);

ReactDOM.render( <Provider store={store}>
  <Router history={browserHistory}
   routes={routes} />
</Provider>, document.getElementById('root'));
registerServiceWorker();
