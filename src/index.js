import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './App/configureStore';
import SpaceTravelersHub from './App/SpaceTravelersHub';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SpaceTravelersHub />
    </Provider>
  </React.StrictMode>,
);
