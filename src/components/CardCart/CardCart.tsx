import React from 'react';
import { CardCartSpec } from './spec';
import './CardCart.css';
import { useFeldEngine } from '@/core/useFeldEngine';

export const CardCart: React.FC<CardCartSpec> = ({ id, imageUrl, title, price, ...rest }) => {
  const engine = useFeldEngine();

  const handleAddToCart = () => {
    engine?.emit('addToCart', { id, title, price });
  };

  return (
    <div className="feld-card-cart" {...rest}>
      <img src={imageUrl} alt={title} className="feld-card-cart-image" />
      <div className="feld-card-cart-info">
        <h3 className="feld-card-cart-title">{title}</h3>
        <p className="feld-card-cart-price">{price}</p>
      </div>
      <button onClick={handleAddToCart} className="feld-card-cart-button">
        Add to Cart
      </button>
    </div>
  );
};
