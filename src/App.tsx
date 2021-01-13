import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './App.scss';

import configure from './store';
import AppRoutes from './routes/AppRoutes';

const app = (
  <Provider store={configure()}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
