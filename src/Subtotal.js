import React from "react";
import "./Subtotal.css";
import NumberFormat from "react-number-format";
import "./Product";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <div className="subtotal__text">
        <h3>
          Subtotal ({basket.length} items):{" "}
          <strong>
            <NumberFormat
              value={getBasketTotal(basket)}
              decimalScale={2}
              displayType={"text"}
              prefix={"$"}
            />
          </strong>
        </h3>

        <small className="subtotal_gift">
          <input type="checkbox" />
          This order contains a gift
        </small>
      </div>

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
