import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { LoginStyles } from "./LoginStyles";
import { useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((_) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        auth && history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const signInWithGoogle = () => {
    let googleProvider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(googleProvider)
      .then((user) => user && history.push("/"));
  };

  return (
    <LoginStyles>
      <img
        className="login-logo"
        alt="amazon_logo.png"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      />
      <div className="login-container">
        <h1>Sign In</h1>
        <form onSubmit={signIn} method="post" action="/form/login">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="signin">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <div className="login-google" onClick={signInWithGoogle}>
          <img
            src="https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png"
            alt="google.png"
          />
          <h5>Sign in with google</h5>
        </div>
        <button onClick={signUp} className="signup">
          Create your Amazon Account
        </button>
      </div>
    </LoginStyles>
  );
}

export default Login;
