import React, { useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct'
import { CheckoutStyles } from './CheckoutStyles'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
  // eslint-disable-next-line
  const [{basket}, dispatch] = useStateValue()

  useEffect(() => {
    document.title = 'Checkout'
  },[])

  return (
    <CheckoutStyles>
      <div className='checkout-left'>
        <img 
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
          alt='ads' 
        />
        <div>
          <h2 className='checkout-title'>Your Shopping Basket</h2>
          {basket.map(item => (
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
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </CheckoutStyles>
  )
}

export default Checkout
