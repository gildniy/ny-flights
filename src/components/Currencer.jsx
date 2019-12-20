import React from 'react'

export const Currencer = ({ currency, changeCurrency }) => {
  return <input type='button' className='btn btn-sm btn-grad' onClick={() => changeCurrency(currency)} value={currency}/>
}
