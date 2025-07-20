import React from 'react';
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../Utils/DataUtils';
import Button from '../UI/Button';
import './CartSidebar.css';

const CartSidebar = () => {
  const { 
    isOpen, 
    items, 
    toggleCart, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice,
    clearCart 
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={toggleCart}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Զամբյուղ</h2>
          <button className="cart-close" onClick={toggleCart}>
            <FiX size={24} />
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Ձեր զամբյուղը դատարկ է</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map(item => (
                  <div key={item.id} className="cart-item">
                    <img 
                      src={item.images?.[0] || '/placeholder-image.jpg'} 
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">{formatPrice(item.price)}</p>
                      
                      <div className="cart-item-controls">
                        <div className="quantity-controls">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            <FiMinus size={16} />
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            <FiPlus size={16} />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Ընդամենը: {formatPrice(getTotalPrice())}</strong>
                </div>
                
                <div className="cart-actions">
                  <Button 
                    variant="outline" 
                    size="small" 
                    onClick={clearCart}
                  >
                    Մաքրել զամբյուղը
                  </Button>
                  <Button size="medium">
                    Պատվիրել
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;