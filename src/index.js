import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import posts from './reducers/index';
// import registerServiceWorker from './registerServiceWorker';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
const store = createStore(posts);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
