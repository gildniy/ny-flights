import React from 'react'
import ReactDOM from 'react-dom'
import { Currencer } from './Currencer.jsx'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'

describe('Currencer Component', () => {

  const changeCurrency = jest.fn()
  const tree = <Currencer currencyState={'USD'} currency={'USD'} changeCurrency={changeCurrency}/>

  it('renders without crashing', () => {
    const { getByTestId } = render(tree);
    const button = getByTestId("currencer")
    expect(button).toBeDefined()
  })

  it('changes currency when clicked', () => {
    const { getByTestId } = render(tree);
    const button = getByTestId("currencer")
    fireEvent.click(button);
    expect(changeCurrency).toHaveBeenCalled()
  })
})
