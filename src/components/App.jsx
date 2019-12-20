import React, { Component } from 'react'
import { Header } from './Header.jsx'
import { Content } from './Content.jsx'
import { connect } from 'react-redux'
import { CHANGE_CURRENCY } from '../actions/types'
import { Currencer } from './Currencer.jsx'
import { getAllFlights, getAllPlaces } from '../actions/flightActions'
import { convertCurrency } from '../actions/currencyActions'

class App extends Component {

  constructor (props) { super(props)}

  render () {
    const { currencyConvert, changeCurrency, currencyState, flightState, placeState, dateState, getFlights, getPlaces, handleChange } = this.props
    const { currency, converted } = currencyState
    const { flights, places } = flightState

    return (
      <div className="wrapper">
        <section className="section-header">
          {/*<h2>Currency: {currency}</h2>*/}
          <div className="logo-container">
            <div className='logo'>NYFL</div>
            <div className="logo-text">
              NEW YORK FLIGHTS LISTING
            </div>
          </div>
          <div className="buttons-currency">
            <Currencer changeCurrency={changeCurrency} currency='USD'/>
            <Currencer changeCurrency={changeCurrency} currency='EUR'/>
            <Currencer changeCurrency={changeCurrency} currency='GBP'/>
            <Currencer changeCurrency={changeCurrency} currency='ZAR'/>
          </div>
          <div className="inputs">
            <Header
              placeState={placeState}
              handleChange={handleChange}
              dateState={dateState}
              places={places}
              currency={currency}
              flightsNo={flights ? flights.length : 0}
              getPlaces={getPlaces}/>
          </div>
        </section>
        <section className="section-content">
          <Content
            dateState={dateState}
            placeState={placeState}
            converted={converted}
            currencyConvert={currencyConvert}
            currency={currency}
            getFlights={getFlights}
            flights={flights}
          />
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  changeCurrency: currency => dispatch(
    { type: CHANGE_CURRENCY, payload: currency }),
  handleChange: (event, type) => dispatch(
    { type, payload: event.target.value }),
  getFlights: (data) => getAllFlights(dispatch, data),
  getPlaces: (queryString) => getAllPlaces(dispatch, queryString),
  currencyConvert: (data) => convertCurrency(dispatch, data),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)


