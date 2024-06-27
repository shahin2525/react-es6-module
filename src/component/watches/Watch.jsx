/* eslint-disable react/prop-types */

const Watch = ({ watch }) => {
  return (
    <div>
      <p>Name: {watch.watch_name}</p>
      <p>Price: {watch.watch_price}</p>
    </div>
  );
};

export default Watch;
