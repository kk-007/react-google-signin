import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore,compose,applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import RootReducer from "./reducers";



const init = ()=>{
  return new Promise((res,rej)=>{
    window.gapi.load('client:auth2',()=>{
      window.gapi.auth2.init({
        client_id:'210767855072-cratf6e4jb79atmqb11880oaigapoiih.apps.googleusercontent.com',
        scope:'profile'
      }).then(()=>res(true));
    });
  })
}
init().then(()=>{
  ReactDOM.render(
    <Provider store={createStore(RootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
