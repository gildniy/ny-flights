import React, { Component } from 'react'
import { Inputs } from '../inputs/Inputs.jsx'
import { Content } from '../content/Content.jsx'
import { connect } from 'react-redux'
import { CHANGE_CURRENCY } from '../../actions/types'
import { Currencer } from '../currencer/Currencer.jsx'
import { getAllFlights, getAllPlaces } from '../../actions/flight/flightActions'
import { convertCurrency } from '../../actions/currency/currencyActions'

class App extends Component {

  constructor (props) { super(props)}

  componentDidMount () {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }

  render () {
    const { currencyConvert, changeCurrency, currencyState, flightState, placeState, dateState, getFlights, getPlaces, handleChange } = this.props
    const { currency, converted } = currencyState
    const { flights, places } = flightState
    const currencyStrArray = ['USD', 'EUR', 'GBP', 'ZAR']

    const fromToNames = {}
    places.forEach(item => {
      if (item.id === placeState.from) {
        fromToNames.from = item.name
      }
      if (item.id === placeState.to) {
        fromToNames.to = item.name
      }
    })

    return (
      <div data-testid="root-app" className="wrapper">
        <section className="section-header">
          <div className="row">
            <div className="col-md-4">
              <div className="logo-container">
                <div className='logo'>NEW YORK</div>
                <div className="logo-text">
                  FLIGHTS LISTING
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="buttons-currency">
                <div className="currencies-label">CURRENCIES</div>
                {
                  currencyStrArray.map((btn, idx) =>
                    <Currencer key={idx}
                               changeCurrency={changeCurrency}
                               currencyState={currencyState}
                               currency={btn}/>,
                  )
                }
              </div>
              <Inputs
                placeState={placeState}
                handleChange={handleChange}
                dateState={dateState}
                places={places}
                currency={currency}
                flightsNo={flights ? flights.length : 0}
                getPlaces={getPlaces}/>
            </div>
          </div>
        </section>
        <section className="from-to-bar">
          <div className="row">
            <div className="col-md-6">
              <span className="from-to-label">ORIGIN</span>
              <span className="from-to-name">{fromToNames.from && (fromToNames.from).toUpperCase()}</span>
            </div>
            <div className="col-md-6">
              <span className="from-to-label">DESTINATION</span>
              <span className="from-to-name">{fromToNames.to && (fromToNames.to).toUpperCase()}</span>
            </div>
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
        <footer>
          &copy; <span id="year"/> - Gildas Niyigena
        </footer>
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


