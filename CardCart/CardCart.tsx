import React from 'react';
import './CardCart.css';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CardCartProps {
  id?: string;
  items: CartItem[];
  onQuantityChange?: (itemId: string, quantity: number) => void;
  onRemoveItem?: (itemId: string) => void;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

export const CardCart: React.FC<CardCartProps> = ({ 
  id,
  items,
  onQuantityChange,
  onRemoveItem,
  variant = 'default',
  className,
  ...rest 
}) => {
  const cartClasses = [
    'feld-card-cart',
    `feld-card-cart--${variant}`,
    className
  ].filter(Boolean).join(' ');

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      onQuantityChange?.(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    onRemoveItem?.(itemId);
  };

  return (
    <div 
      className={cartClasses}
      
      
      
      {...rest}
    >
      <div className="feld-card-cart-header">
        <h3 className="feld-card-cart-title">Shopping Cart</h3>
        <span className="feld-card-cart-count">{items.length} items</span>
      </div>
      
      <div className="feld-card-cart-items">
        {items.map((item) => (
          <div key={item.id} className="feld-card-cart-item">
            {item.image && (
              <div className="feld-card-cart-item-image">
                <img src={item.image} alt={item.title} />
              </div>
            )}
            
            <div className="feld-card-cart-item-content">
              <h4 className="feld-card-cart-item-title">{item.title}</h4>
              <div className="feld-card-cart-item-price">${item.price.toFixed(2)}</div>
            </div>
            
            <div className="feld-card-cart-item-controls">
              <button
                className="feld-card-cart-quantity-btn"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="feld-card-cart-quantity">{item.quantity}</span>
              <button
                className="feld-card-cart-quantity-btn"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            
            <button
              className="feld-card-cart-remove-btn"
              onClick={() => handleRemoveItem(item.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      
      <div className="feld-card-cart-footer">
        <div className="feld-card-cart-total">
          <span>Total:</span>
          <span className="feld-card-cart-total-amount">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
