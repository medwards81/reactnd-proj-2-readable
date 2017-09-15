import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import registerServiceWorker from './registerServiceWorker';

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger, promise)
  )
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
