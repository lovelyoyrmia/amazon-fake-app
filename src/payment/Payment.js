import React, { useEffect, useState } from 'react'
import CheckoutProduct from '../components/CheckoutProduct'
import { useStateValue } from '../components/StateProvider'
import { PaymentStyles } from './PaymentStyles'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
import axios from './axios'
import { db } from '../firebase/firebase'

function Payment() {
  // eslint-disable-next-line
  const [{basket, user}, dispatch] = useStateValue()

  const history = useHistory()

  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  },[basket])

  console.log('the secret >>>', clientSecret)
  console.log('userrrrrrrr', user)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      // payment intent = payment confirmation

      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

      setSucceeded(true)
      setError(null)
      setProcessing(false)

      dispatch({
        type: 'EMPTY_BASKET'
      })

      history.replace('/orders')
    })
  }

  const handleChange = (event) => {
    // Listen for changes in card element
    // and display any error as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <PaymentStyles>
      <div className='payment-container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment-address'>
            <p>{user?.email}</p>
            <p>89 Pisangan</p>
            <p>DKI Jakarta, Indonesia</p>
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment-items'>
            {basket.map((item) => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}  
              />
            ))}
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment-price'>
                <CurrencyFormat 
                  renderText={(value) => (
                    <h3>Order total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeperator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </PaymentStyles>
  )
}

export default Payment
