/* eslint-disable react/prop-types */
import "./Bottle.css";
const Bottle = ({ bottle }) => {
  console.log(bottle);
  return (
    <div className="bottle">
      <img src={bottle.img} alt="" />
      <p>{bottle.name}</p>
      <p>{bottle.price}</p>
    </div>
  );
};

export default Bottle;
