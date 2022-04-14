import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../../src/Cart.css";
function Cart({ cartItems, closeCart }) {
  return (
    <div className="cart-items">
      <div className="cart-header">
        <h4>Cart Items</h4>
        <button onClick={closeCart}>
          <CloseIcon />
        </button>
      </div>
      {cartItems.length === 0 && (
        <div className="cart-empty">
          <p>Seems Like you've not added anything..</p>
          <button onClick={closeCart}>Go Shop!</button>
        </div>
      )}
      <div className="cart-view">
        {cartItems.map((c) => (
          <div key={c.id} className="cart-items-list">
            <img src={c.image} alt="" />
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
