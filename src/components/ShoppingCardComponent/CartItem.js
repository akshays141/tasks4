import React from 'react'

const CartItem = ({name, price, onRemove}) => {
  return (
    <div>
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default CartItem;