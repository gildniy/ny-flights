import App from '../components/app/App'
import React from 'react'

const {
  renderWithRedux,
  format24To12Time,
  formatDateToReadable,
  formatDate,
} = require('./helpers')

describe('helpers', () => {
  describe('formatDate', () =>{
    test('1. ', () => {
      expect(formatDate(new Date('2019-12-22'))).toHaveLength(10)
    })
    test('2. ', () => {
      expect(formatDate(new Date('2019-12-01'))).toHaveLength(10)
    })
  })

  test('formatDateToReadable', () => {
    expect(((formatDateToReadable('2019-12-24')).split(' '))[2]).
      toHaveLength(4)
  })

  test('format24To12Time', () => {
    expect(format24To12Time('00:00')).toHaveLength(8)
  })

  test('renderWithRedux', () => {
    expect(renderWithRedux(<App/>, {})).toHaveProperty('getByTestId')
  })
})
