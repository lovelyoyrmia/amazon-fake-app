import React, { useEffect } from 'react'
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
          <Product id='45617289' 
            title='GE 6-Outlet Surge Protector, 10 Ft Extension Cord, Power Strip, 800 Joules, Flat Plug, Twist-to-Close Safety Covers, UL Listed, White, 14092' 
            price={13.33}
            rating={5}
            image='https://m.media-amazon.com/images/I/71m+hUvYRoL._AC_SX425_.jpg' 
          />
          <Product id='456113421'
            title='HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)' 
            price={119.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL.jpg'
          />
        </div>
        <div className='home-row'>
          <Product id='456287461'
            title='TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear Built-in Mic Headset Premium Deep Bass for Sport Black' 
            price={34.99}
            rating={4}
            image='https://m.media-amazon.com/images/I/71gtHnQGfQL._AC_SX425_.jpg' 
          />
          <Product id='456892791'
            title='Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black' 
            price={248.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L.__AC_SX300_SY300_QL70_FMwebp_.jpg' 
          />
          <Product id='473892017'
            title='Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands Included)' 
            price={199.0}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/51MUa0WUSKL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
          />
        </div>
        <div className='home-row'>
          <Product
            title='[2+2] Pack Screen Protector for T-Mobile REVVL V+ 5G 6.82 Inch 2021 with Camera Lens Protector, HD Full Screen Tempered Glass Film, 9H Hardness, Bubble Free, Scratch Resistant'
            price={8.99}
            rating={4}
            image='https://m.media-amazon.com/images/I/61u1EBeNCmL._AC_SX679_.jpg'
          />
        </div>
      </div>
    </HomeStyles>
  )
}

export default Home
