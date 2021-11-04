import React from 'react'
import { HeaderStyles } from './HeaderStyles'
import { Search, ShoppingBasket } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from '../firebase/firebase'

function Header() {

  const [{basket, user}, _] = useStateValue()

  const handleAuth = () => {
    if (user) {
      auth.signOut()
    }
  }

  var userIndex = user?.email.indexOf('@')

  var userSlice = user?.email.slice(0, userIndex)

  return (
    <HeaderStyles>
      <Link to='/'>
        <img 
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
          className='header-logo' alt='amazon.png' />
      </Link>
      <div className='header-search' >
        <input className='header-searchInput' type='text' />
        <Search className='header-searchIcon' />
      </div>
      <div className='header-nav' >
        <Link to={!user && '/login'} className='header-link' >
          <div className='header-option' onClick={handleAuth} >
            <span className='header-optionLineOne' >Hello {user ? userSlice : 'Guest'} !!</span>
            <span className='header-optionLineTwo' >{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className='header-option' >
          <span className='header-optionLineOne' >Returns</span>
          <span className='header-optionLineTwo' >& Orders</span>
        </div>
        <div className='header-option' >
          <span className='header-optionLineOne' >Your</span>
          <span className='header-optionLineTwo' >Prime</span>
        </div>
        <Link to='/checkout' className='header-link' >
          <div className='header-optionBasket'>
            <ShoppingBasket />
            <span className='header-optionLineTwo header-basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </HeaderStyles>
  )
}

export default Header
