import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import "./Bottles.css";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handlePurchaseData = (data) => {
    setCart([...cart, data]);
    console.log("click bottle");
  };
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
