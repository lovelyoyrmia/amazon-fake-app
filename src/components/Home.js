import React, { useEffect } from 'react'
import { infoProduct } from '../models/InfoProduct'
import { HomeStyles } from './HomeStyles'
import Product from './Product'

// https://www.1into2.com/wp-content/uploads/ama_ads.png
function Home() {

  useEffect(() => {
    document.title = 'Amazon Clone'
  },[])

  return (
    <HomeStyles>
      <div className='home-container'>
        <img 
          src= 'https://samtutorials.com/wp-content/uploads/2018/09/Amazon_Banner.png'
          className='home-image'
          alt='amazon-home.png' 
        />
        <div className='home-row'>
          {(() => {
            var pushList = []
            for(let index = 0; index < infoProduct.length - 4; index++){
              pushList.push(<Product 
                      id={infoProduct[index].id} 
                      title={infoProduct[index].title}
                      image={infoProduct[index].image}
                      price={infoProduct[index].price}
                      rating={infoProduct[index].rating}
                      />)
            }
            return pushList
          })()}
        </div>
        <div className='home-row'>
          {(() => {
            var pushList = []
            for(let index = 2; index < infoProduct.length - 1; index++){
              pushList.push(<Product 
                      id={infoProduct[index].id} 
                      title={infoProduct[index].title}
                      image={infoProduct[index].image}
                      price={infoProduct[index].price}
                      rating={infoProduct[index].rating}
                      />)
            }
            return pushList
          })()}
        </div>
        <div className='home-row'>
          <Product
            title={infoProduct[5].title}
            price={infoProduct[5].price}
            rating={infoProduct[5].rating}
            image={infoProduct[5].image}
          />
        </div>
      </div>
    </HomeStyles>
  )
}

export default Home
