import React, { useState } from 'react';
import { FiHeart, FiShoppingBag, FiEye } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { formatPrice, calculateDiscount } from '../../Utils/DataUtils';
import Button from '../UI/Button';
import { toast } from 'react-toastify';
import './ProductCard.css';

const ProductCard = ({ product, onQuickView }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  
  const isProductFavorite = isFavorite(product.id);
  const discount = calculateDiscount(product.originalPrice, product.price);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} ավելացվել է զամբյուղում`);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isProductFavorite) {
      removeFromFavorites(product.id);
      toast.info('Հեռացվել է ցանկից');
    } else {
      addToFavorites(product);
      toast.success('Ավելացվել է ցանկում');
    }
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView && onQuickView(product);
  };

  return (
    <div className="product-card">
      {discount > 0 && (
        <div className="product-badge">-{discount}%</div>
      )}
      
      <div className="product-image-container">
        {imageLoading && <div className="image-placeholder">Բեռնվում է...</div>}
        <img 
          src={product.images?.[0] || '/placeholder-image.jpg'}
          alt={product.name}
          className="product-image"
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
        
        <div className="product-overlay">
          <div className="product-actions">
            <button 
              className="action-btn favorite-btn"
              onClick={handleToggleFavorite}
              title={isProductFavorite ? 'Հեռացնել ցանկից' : 'Ավելացնել ցանկում'}
            >
              {isProductFavorite ? <FaHeart /> : <FiHeart />}
            </button>
            
            <button 
              className="action-btn quick-view-btn"
              onClick={handleQuickView}
              title="Արագ դիտում"
            >
              <FiEye />
            </button>
          </div>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`star ${i < Math.floor(product.rating || 0) ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="reviews-count">({product.reviews || 0})</span>
        </div>

        <div className="product-price">
          <span className="current-price">{formatPrice(product.price)}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <div className="product-status">
          {product.inStock ? (
            <span className="in-stock">Առկա է</span>
          ) : (
            <span className="out-of-stock">Չկա պահեստում</span>
          )}
        </div>

        <Button 
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="add-to-cart-btn"
          size="small"
        >
          <FiShoppingBag size={16} />
          Ավելացնել զամբյուղում
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;