import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Routes } from './routes'
import './styles.scss'

const wrapper = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  wrapper)
