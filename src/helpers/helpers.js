import { createStore } from 'redux'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import React from 'react'
import rootReducers from '../reducers'

const formatDate = (date) => {
  const d = new Date(date)
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  let year = d.getFullYear()

  if (month.length < 2) {
    month = '0' + month
  }
  if (day.length < 2) {
    day = '0' + day
  }
  return [year, month, day].join('-');
}

const formatDateToReadable = (rawDate) => {
  const date = new Date(rawDate)

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return `${day} ${monthNames[monthIndex]} ${year}`
}

const format24To12Time = (time24) => {
  let ts = time24
  const H = +ts.substr(0, 2)
  let h = (H % 12) || 12
  h = (h < 10) ? ('0' + h) : h
  const ampm = H < 12 ? ' am' : ' pm'
  ts = h + ts.substr(2, 3) + ampm
  return ts
}

const renderWithRedux = (
  ui, {
    initialState = {},
    store = createStore(rootReducers, initialState),
  } = {}) => {
  return { ...render(<Provider store={store}>{ui}</Provider>), store }
}

export { formatDate, formatDateToReadable, format24To12Time, renderWithRedux }

