import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from "./components/Checkout";
import Login from "./auth/Login"
import { auth } from "./firebase/firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./payment/Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from "./payment/Orders";

const promise = loadStripe(
  'pk_test_51Js8QCC5VOY8ClmJ870hSsRndj0xvQcmDTfSCZ83SGWRyzs7BevGGcUW3PBhKzL9z1aokMCuz4jm0QNp9PW32R0W00GOdNbibf'
)

function App() {
  const [{user}, dispatch] = useStateValue()
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)

      if (authUser) {
        // Just logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[user])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact>
            <Header />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
