import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Instagram, MapPin, Check } from 'lucide-react';

export const Header = ({ cartCount, onCartClick }) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-emerald-900/10"
      data-testid="app-header"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center shadow-lg shadow-emerald-900/20 flex-shrink-0">
              <div className="text-center">
                <div className="text-white text-[6px] sm:text-[8px] font-bold leading-tight">THE GARDEN</div>
                <div className="text-amber-300 text-[6px] sm:text-[8px] font-bold leading-tight">HOUSE</div>
              </div>
            </div>
            <div>
              <h1 className="text-base sm:text-2xl font-bold text-emerald-900 tracking-tight leading-tight">The Garden House</h1>
              <p className="text-[9px] sm:text-xs text-emerald-700 tracking-wider">VEG & FAST FOOD</p>
            </div>
          </motion.div>

          {/* Cart Button */}
          <motion.button
            onClick={onCartClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full text-xs sm:text-base font-semibold shadow-lg shadow-emerald-900/30 hover:shadow-xl hover:shadow-emerald-900/40 transition-shadow flex-shrink-0"
            data-testid="view-cart-header-btn"
          >
            <span className="hidden sm:inline">View Cart</span>
            <span className="sm:hidden">Cart</span>
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-7 sm:h-7 bg-amber-400 text-emerald-900 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-md"
                data-testid="cart-count-badge"
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-amber-300 mb-2">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-semibold">Our Location</span>
          </div>
          <p className="text-white/90 text-lg">Near Indian Petrol Pump, Sirsiya Road, Bhinga</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Check, text: 'Fresh & Hygienic Food' },
            { icon: Truck, text: 'Fast Delivery' },
            { icon: Check, text: 'Best Quality' },
            { icon: Check, text: 'Family Restaurant' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-amber-300" />
              </div>
              <p className="text-sm text-center font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-white/20"
        >
          <div className="flex items-center justify-center gap-2 text-amber-300 mb-2">
            <Instagram className="w-5 h-5" />
            <span className="text-lg">Follow us @thegarden_house_</span>
          </div>
          <p className="text-white/70 text-sm mt-4">© 2025 The Garden House. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};