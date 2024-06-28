import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../../utils/utilis";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
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
  useEffect(() => {
    //

    if (bottles.length) {
      const getLocalStorageData = getStoredCart();
      const savedCart = [];
      for (const id in getLocalStorageData) {
        console.log(getLocalStorageData);
        const bottle = bottles.map((bottle) => bottle.id === id);
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
      <h1>cart:{cart.length}</h1>
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
