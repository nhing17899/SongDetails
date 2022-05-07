import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import App from './components/App';
import reducer from './reducers/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reducer}>
    <App />
  </Provider>
);

