import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';



const middleware = [];

middleware.push(thunk);
middleware.push(ReduxPromise);

const persistedState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)



ReactDOM.render( <Provider store={store}>
  <Router history={browserHistory}
   routes={routes} />
</Provider>, document.getElementById('root'));
registerServiceWorker();
