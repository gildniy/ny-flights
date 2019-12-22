import React from 'react'

export const Currencer = ({ currencyState, currency, changeCurrency }) => {

  const activeClass = currencyState.currency === currency ? ' active' : ''

  return <input
    data-testid='currencer'
    type='button'
    className={'btn btn-sm btn-grad' + activeClass}
    onClick={() => changeCurrency(currency)}
    value={currency}
  />
}
