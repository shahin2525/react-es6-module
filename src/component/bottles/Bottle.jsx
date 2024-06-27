/* eslint-disable react/prop-types */
import "./Bottle.css";
const Bottle = ({ bottle, handlePurchaseData }) => {
  console.log(bottle);
  return (
    <div className="bottle">
      <img src={bottle.img} alt="" />
      <p>{bottle.name}</p>
      <p>{bottle.price}</p>
      <button onClick={() => handlePurchaseData(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
