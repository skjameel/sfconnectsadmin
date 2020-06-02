import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'
import { createPromise } from 'redux-promise-middleware'

import './resources/_antd.less' // redefinition AntDesign variables
// import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap styles

// import './resources/AntStyles/AntDesign/antd.cleanui.scss'
// import './resources/CleanStyles/Core/core.cleanui.scss'
// import './resources/CleanStyles/Vendors/vendors.cleanui.scss'

const middleware = applyMiddleware(createPromise())
const enhancer = compose(composeWithDevTools(middleware))

export const store = createStore(reducers,enhancer)
export const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()

