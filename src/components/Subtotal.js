import React from 'react'
import { SubtotalStyles } from './SubtotalStyles'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from '../reducer'
import {  useHistory } from 'react-router-dom'

function Subtotal() {

  const history = useHistory()
  // eslint-disable-next-line
  const [{basket}, _] = useStateValue()

  return (
    <SubtotalStyles>
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {value}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeperator={true}
        prefix={'$'}
      />
      <button onClick={() => history.push('/payment')}>Procced to checkout</button>
    </SubtotalStyles>
  )
}

export default Subtotal
