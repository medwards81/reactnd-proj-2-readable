import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>,
	document.getElementById('root')
)
registerServiceWorker()
