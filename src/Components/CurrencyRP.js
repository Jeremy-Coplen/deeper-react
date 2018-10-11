import React, { Component } from "react"

class Currency extends Component {
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
            <div>
                <button onClick={this.handleAmountIncrease}>+</button>
                <button onClick={this.handleAmountDecrease}>-</button>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default Currency