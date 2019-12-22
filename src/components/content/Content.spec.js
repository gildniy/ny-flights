import React from 'react'
import { Content } from './Content.jsx'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

describe('Content Component', () => {

  const tree = <Content
    dateState={{ date: '2019-12-24' }}
    placeState={{ from: 'KGL', to: 'BUJ' }}
    converted={{ rate: 1, name: 'US Dollar' }}
    currencyConvert={jest.fn()}
    currency={'USD'}
    flights={[
      {
        minPrice: '100',
        id: 0,
        departureDate: '2019-12-24',
        departureTime: '00:00',
      },
    ]}
    getFlights={jest.fn()}
  />

  it('renders without crashing', () => {
    const { getByTestId } = render(tree)
    const content = getByTestId('content')
    expect(content).toBeDefined()
  })
})
