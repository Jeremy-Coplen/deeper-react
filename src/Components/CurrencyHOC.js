import React, { Component, Fragment } from 'react'

const withCurrency = (Basecomponent) =>
  class Curency extends Component {
    state = {
      amount: 1
    }
    handleAmountIncrease = () => {
      this.setState((prevState, props) => {
        return {
          amount: prevState.amount + 1
        }
      })
    }
    handleAmountDecrease = () => {
      this.setState((prevState, props) => {
        return {
          amount: prevState.amount - 1
        }
      })
    }
    render() {
      return (
        <Fragment>
          <button onClick={this.handleAmountIncrease}>+</button>
          <button onClick={this.handleAmountDecrease}>-</button>
          <Basecomponent
            amount={this.state.amount}
            currency={this.props.currency}
            exchangeRate={this.props.exchangeRate}
          />
        </Fragment>
      )
    }
  }

const CurrencyDisplay = (props) => (
  <p>
    US Dollar: ${props.amount.toFixed(2)} - {props.currency}{' '}
    {(props.amount * props.exchangeRate).toFixed(2)}
  </p>
)

const exchangedCurrency = withCurrency(CurrencyDisplay)

export default exchangedCurrency
