import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HbwVCBCCtmPpw4AkWqCDDGwNH4SCDuilE0dCVxxEjuFHKzaWY03IhshGML4rQrCkW3pSLIaWS84zm22jFbjMuMb00vim7nmId"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads.

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in or was already logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM naming convention
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
