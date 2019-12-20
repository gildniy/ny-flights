import React from 'react'

export const Currencer = ({ currency, changeCurrency }) => {
  return <button onClick={() => changeCurrency(currency)}>{currency}</button>
}
