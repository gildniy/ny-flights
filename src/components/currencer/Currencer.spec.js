import React from 'react'
import ReactDOM from 'react-dom'
import Currencer from './Currencer.jsx'

it('renders without crashing', ()=>{
  const div = document.createElement("div")
  ReactDOM.render(<Currencer/>, div)
})
