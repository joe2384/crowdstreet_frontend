import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  rootElement
);

reportWebVitals();
