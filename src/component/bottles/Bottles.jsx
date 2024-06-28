import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart, removeLS } from "../../utils/localStorage";
import Cart from "../cart/Cart";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handlePurchaseData = (bottle) => {
    setCart([...cart, bottle]);
    // console.log(bottle.id);
    addToLS(bottle.id);
  };

  const handleRemove = (id) => {
    const remaining = cart.filter((bottle) => bottle.id !== id);
    console.log(remaining);
    setCart(remaining);

    removeLS(id);
  };

  useEffect(() => {
    //

    if (bottles.length) {
      const getLocalStorageData = getStoredCart();
      const savedCart = [];
      for (const id of getLocalStorageData) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        // console.log(bottle);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
    //
  }, [bottles]);
  return (
    <div>
      <h1>bottles:{bottles.length}</h1>

      <Cart handleRemove={handleRemove} cart={cart}></Cart>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            handlePurchaseData={handlePurchaseData}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
