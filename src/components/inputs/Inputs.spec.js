import React from 'react'
import { Inputs } from './Inputs.jsx'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { formatDate } from '../../helpers/helpers'

describe('Inputs Component', () => {
  const handleChange = jest.fn()
  const tree = <Inputs
    placeState={{ from: 'KGL', to: 'BUJ' }}
    dateState={{ date: '2019-12-24' }}
    places={[
      { id: '1', name: 'xxx' },
      { id: '2', name: 'yyy' },
      { id: '3', name: 'zzz' },
    ]}
    getPlaces={jest.fn()}
    handleChange={handleChange}
  />

  it('renders without crashing', () => {
    const { getByTestId } = render(tree)
    const inputs = getByTestId('inputs')
    expect(inputs).toBeDefined()
  })

  it('call handleChange on input field', () => {

    const { getByTestId } = render(tree)

    const origin = getByTestId('inputs-origin')
    const destination = getByTestId('inputs-destination')
    const partialDate = getByTestId('inputs-partial-date')
    const today = formatDate(new Date())

    fireEvent.change(origin, { target: { value: '1' } })
    fireEvent.change(destination, { target: { value: '2' } })
    fireEvent.change(partialDate, { target: { value: today } })
    expect(handleChange).toBeCalled()
  })
})
