import React from 'react'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './root';
import { root as reducer } from './reducers';

const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware()
  )
);

render(
  <Provider store={store}>
    <Root></Root>
  </Provider>,
  document.getElementById('app-container')
);
