/* eslint-disable react/prop-types */
import "./Cart.css";
const Cart = ({ cart, handleRemove }) => {
  return (
    <div className="cart-container">
      <h1>cart:{cart.length}</h1>
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <img key={bottle.id} src={bottle.img}></img>
          <button onClick={() => handleRemove(bottle.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
