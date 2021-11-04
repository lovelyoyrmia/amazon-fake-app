import React from 'react'
import { CheckoutProductStyles } from './CheckoutProductStyles'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
  // eslint-disable-next-line
  const [{basket}, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <CheckoutProductStyles>
      <img src={image} alt={id} />
      <div className='checkoutProduct-info' >
        <p className='checkoutProduct-title'>{title}</p>
        <p className='checkoutProduct-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct-rating'>
          {Array(rating).fill().map((_, i) => (
              <p>⭐</p>
            )
          )}
        </div>
        <button type='button' onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </CheckoutProductStyles>
  )
}

export default CheckoutProduct
