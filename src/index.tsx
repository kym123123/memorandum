import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dotenv from 'dotenv';
import App from './App';
import { Provider } from 'react-redux';
import store from 'modules/index';

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
