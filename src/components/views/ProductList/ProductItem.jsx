/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import CartContext from '../../../contexts/CartContext';

function ProductItem({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const { id, name, price } = product;

  const formatPrice = (p) => {
    return `${p} €`;
  };

  return (
    <>
      <h3>{name}</h3>
      <strong>{formatPrice(price)}</strong>
      <br />
      <button
        type="button"
        onClick={() => {
          const cartItem = cart.find((item) => item.id === id);
          if (cartItem) {
            cartItem.qty += 1;
            setCart([...cart]);
          } else {
            // eslint-disable-next-line no-param-reassign
            product.qty = 1;
            setCart([...cart, product]);
          }
        }}
      >
        Acheter
      </button>
    </>
  );
}

export default ProductItem;
