import React, { useContext } from 'react';
import CartContext from '../../../contexts/CartContext';
import BasketItem from './BasketItem';

function Basket() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li>
            <BasketItem {...item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Basket;
