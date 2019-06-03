import { PayPalButton } from 'react-paypal-button'
import React, { Component } from "react";

export default class App extends Component {
    render(){
      const { functionSave } = this.props;
      const { submitCalendar } = functionSave;
      const { total_payment }  = this.props
      return (
        <PayPalButton
            env='sandbox'
            sandboxID='AdYoouzmjCqV3zGJpHFJzOkDXieTh5RRpKApzRZ20smBQJL2jW3jmiDaCWTDwkpr6VKxd7tPKtlsw4DA'
            amount={total_payment}
            currency='USD'
            onPaymentSuccess={(res) => {
              console.log('success',res);
              submitCalendar();
            }}
            onPaymentError={(res) => {
                console.log('error',res);
            }}
            onPaymentStart={(res) => {
                console.log('start',res);
            }}
        />
      )
    }
  }