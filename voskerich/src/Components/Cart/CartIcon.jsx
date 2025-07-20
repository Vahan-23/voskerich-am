import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import './CartIcon.css';

const CartIcon = () => {
  const { toggleCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <button className="cart-icon" onClick={toggleCart}>
      <FiShoppingBag size={24} />
      {totalItems > 0 && (
        <span className="cart-badge">{totalItems}</span>
      )}
    </button>
  );
};

export default CartIcon;