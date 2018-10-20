import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
