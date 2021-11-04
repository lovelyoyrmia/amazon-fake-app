import React from 'react'
import styled from 'styled-components'
import { useStateValue } from './StateProvider'

const ProductStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 1;
  align-items: center;
  margin: 10px;
  justify-content: flex-end;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  .product-rating {
    display: flex;
  }

  .product-info {
    height: 100px;
    margin-bottom: 15px;
  }

  .product-price {
    margin-top: 5px;
  }

  button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    padding: 6px;
  }
`

function Product({
  id,
  title,
  price,
  image,
  rating
}) {

  const [{ basket }, dispatch] = useStateValue()

  console.log(basket)

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating
      }
    })
  }

  return (
    <ProductStyles id={id}>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(rating).fill().map((_, i) => (
              <p>⭐</p>
            )
          )}
        </div>
      </div>
      <img 
        src={image} 
        alt='p1.png' 
      />
      <button type='button' onClick={addToBasket}>Add to basket</button>
    </ProductStyles>
  )
}

export default Product
