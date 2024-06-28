const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");
  //   console.log(storedCart);
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  // save to local storage
  saveCartToLS(cart);
};

const removeLS = (id) => {
  const cart = getStoredCart();

  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLS(remaining);
};

export { addToLS, getStoredCart, removeLS };
