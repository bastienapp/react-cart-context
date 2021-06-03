/* eslint-disable react/prop-types */
import React from 'react';

function BasketItem({ name, qty, price }) {
  const formatPrice = (p) => {
    return `${p} €`;
  };

  return (
    <>
      <h3>{name}</h3>
      <strong>{formatPrice(price * qty)}</strong>
    </>
  );
}

export default BasketItem;
