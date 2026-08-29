import { useState, useEffect, useRef } from 'react';
import { getCartFromStorage, saveCartToStorage, calculateCartTotal } from '../utils/cartUtils';

export const useCart = () => {
  // Lazy initializer - reads from localStorage on first render only
  const [cart, setCart] = useState(() => getCartFromStorage());
  const [cartTotal, setCartTotal] = useState(0);
  const hydrated = useRef(false);

  // Recompute total and persist only after hydration
  useEffect(() => {
    const total = calculateCartTotal(cart);
    setCartTotal(total);
    
    // Skip the first render to avoid overwriting storage during StrictMode remount
    if (hydrated.current) {
      saveCartToStorage(cart);
    } else {
      hydrated.current = true;
    }
  }, [cart]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cart,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItemsCount
  };
};
