import React from 'react'
import App from './App.jsx'
import { renderWithRedux } from '../../helpers'
import '@testing-library/jest-dom/extend-expect'

describe('App', () => {
  test('renders without crashing', () => {
    const { getByTestId } = renderWithRedux(<App/>, {})
    expect(getByTestId('root-app')).toBeInTheDocument()
  })
})
