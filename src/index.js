import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Routes } from './routes'
import './styles.scss'

// https://medium.com/quick-code/deploying-production-build-of-react-app-to-heroku-2548d8bf6936
// https://dev.to/smithmanny/deploy-your-react-app-to-heroku-2b6f
// https://www.freecodecamp.org/news/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a/

const wrapper = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  wrapper)
