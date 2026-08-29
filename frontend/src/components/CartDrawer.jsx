import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle, Phone, MapPin } from 'lucide-react';
import { generateWhatsAppMessage } from '../utils/cartUtils';

export const CartDrawer = ({ isOpen, onClose, cart, cartTotal, updateQuantity, removeFromCart }) => {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  
  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    if (!deliveryAddress.trim()) {
      alert('Please enter your delivery address');
      return;
    }
    
    const message = generateWhatsAppMessage(cart, cartTotal, deliveryAddress);
    const whatsappUrl = `https://wa.me/918303945375?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-50 flex flex-col"
            data-testid="cart-drawer"
          >
            {/* Header */}
            <div className="px-6 py-6 border-b border-emerald-900/10 bg-gradient-to-r from-emerald-600 to-emerald-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Your Cart</h2>
                    <p className="text-white/80 text-sm" data-testid="cart-items-count">
                      {cart.reduce((sum, i) => sum + i.quantity, 0)} items
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  data-testid="cart-close-btn"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    <ShoppingCart className="w-16 h-16 text-emerald-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2">Your cart is empty</h3>
                  <p className="text-emerald-700">Add some delicious items to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-4 shadow-md border border-emerald-900/10"
                      data-testid={`cart-line-${item.id}`}
                    >
                      <div className="flex gap-4">
                        {/* Image */}
                        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold text-emerald-900 text-lg">{item.name}</h3>
                            <motion.button
                              onClick={() => removeFromCart(item.id)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-red-500 hover:text-red-600 transition-colors"
                              data-testid={`cart-remove-${item.id}`}
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              <Trash2 className="w-5 h-5" />
                            </motion.button>
                          </div>

                          <p className="text-emerald-700 font-semibold mb-3">₹{item.price} each</p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm border border-emerald-900/10">
                              <motion.button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-8 h-8 flex items-center justify-center text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                                data-testid={`cart-decrement-${item.id}`}
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-4 h-4" />
                              </motion.button>
                              <span className="w-8 text-center font-bold text-emerald-900" data-testid={`cart-quantity-${item.id}`}>{item.quantity}</span>
                              <motion.button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-8 h-8 flex items-center justify-center text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                                data-testid={`cart-increment-${item.id}`}
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-4 h-4" />
                              </motion.button>
                            </div>
                            <span className="font-bold text-emerald-900" data-testid={`cart-line-total-${item.id}`}>₹{item.price * item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-6 py-6 border-t border-emerald-900/10 bg-gradient-to-br from-emerald-50 to-white">
                {/* Delivery Address */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-emerald-900 font-semibold mb-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    Delivery Address
                  </label>
                  <textarea
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Enter your complete delivery address..."
                    className="w-full px-4 py-3 border-2 border-emerald-900/20 rounded-xl focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 resize-none transition-all"
                    rows="3"
                    data-testid="delivery-address-input"
                  />
                </div>

                {/* Total */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-900/10">
                  <span className="text-xl font-bold text-emerald-900">Total</span>
                  <span className="text-3xl font-black text-emerald-900" data-testid="cart-total">₹{cartTotal}</span>
                </div>

                {/* Order Button */}
                <motion.button
                  onClick={handleWhatsAppOrder}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-2xl shadow-xl shadow-green-500/50 hover:shadow-2xl hover:shadow-green-500/60 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                  data-testid="whatsapp-order-btn"
                >
                  <MessageCircle className="w-6 h-6" />
                  ORDER NOW VIA WHATSAPP
                </motion.button>

                <div className="flex items-center justify-center gap-2 mt-4 text-emerald-700">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+91 8303945375</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};