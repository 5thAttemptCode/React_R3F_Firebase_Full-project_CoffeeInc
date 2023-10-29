import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'


const PayPalButton = ( props ) => {
    const { totalAmount } = props
    const paypalRef = useRef()

    useEffect(() => {
        if (window.paypal) {
          window.paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: totalAmount
                  }
                }]
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                alert('Transaction completed by ' + details.payer.name.given_name)
              })
            }
          }).render(paypalRef.current)
        }
        // cleanup function
        //This ReactDOM.unmountComponentAtNode(paypalRef.current) statement is part of the cleanup function in the
        //useEffect Hook. It's responsible for removing a mounted React component from the DOM and cleaning up its 
        //event handlers and state. If totalAmount changes the PayPalbutton is not renderd twice or more
        return () => {
          if (paypalRef.current) {
            ReactDOM.unmountComponentAtNode(paypalRef.current)
            paypalRef.current.innerHTML = ''
          } 
        };
      }, [totalAmount]) 
        
      return (
        <div ref={paypalRef} tabIndex="0" aria-label="PayPal payment button">
          {totalAmount > 0 ? 'Proceed to Payment' : 'Cart is empty'}
        </div>
      )
  }

  export default PayPalButton