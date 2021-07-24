import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore'

const store = configureStore;

store.subscribe(()=>{
  console.log('state',store.getState())
})

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

