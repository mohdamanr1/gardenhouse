const CART_STORAGE_KEY = 'gardenhouse_cart';

export const getCartFromStorage = () => {
  try {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error reading cart from storage:', error);
    return [];
  }
};

export const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to storage:', error);
  }
};

export const clearCartStorage = () => {
  try {
    localStorage.removeItem(CART_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing cart storage:', error);
  }
};

export const calculateCartTotal = (cart) => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const generateWhatsAppMessage = (cart, total, address) => {
  let message = '🍽️ *New Order from The Garden House*\n\n';
  
  cart.forEach(item => {
    message += `${item.quantity}x ${item.name} - ₹${item.price * item.quantity}\n`;
  });
  
  message += `\n*Total: ₹${total}*\n\n`;
  message += `📍 *Delivery Address:*\n${address}\n\n`;
  message += 'Please confirm my order. Thank you!';
  
  return encodeURIComponent(message);
};