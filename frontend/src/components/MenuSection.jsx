import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const MenuItem = ({ item, onAddToCart, cartItem, updateQuantity }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleDecrement = () => {
    if (cartItem) {
      updateQuantity(item.id, cartItem.quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (cartItem) {
      updateQuantity(item.id, cartItem.quantity + 1);
    } else {
      onAddToCart(item);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
      className="group relative"
      data-testid={`menu-item-${item.id}`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-md shadow-emerald-900/10 hover:shadow-xl hover:shadow-emerald-900/20 transition-all duration-300 h-full flex flex-col">
        {/* Image Container - Compact on mobile */}
        <div className="relative h-28 sm:h-40 md:h-48 lg:h-56 overflow-hidden bg-emerald-50">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Keep original if fallback also fails
                if (!e.target.dataset.fallback) {
                  e.target.dataset.fallback = '1';
                  e.target.style.backgroundColor = '#ecfdf5';
                  e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23ecfdf5"/><text x="50%25" y="50%25" font-family="Arial" font-size="18" fill="%23065f46" text-anchor="middle" dy=".3em">' + encodeURIComponent(item.name) + '</text></svg>';
                }
              }}
            />
          </motion.div>
          
          {/* Price Badge - Smaller on mobile */}
          <div className="absolute top-2 right-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-md">
            <span className="text-emerald-900 font-bold text-xs sm:text-sm md:text-base" data-testid={`price-${item.id}`}>₹{item.price}</span>
          </div>
        </div>

        {/* Content - Compact padding on mobile */}
        <div className="p-2.5 sm:p-4 md:p-5 flex-1 flex flex-col justify-between gap-2">
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-emerald-900 leading-tight line-clamp-2" data-testid={`name-${item.id}`}>
              {item.name}
            </h3>
            {item.description && (
              <p className="text-[10px] sm:text-xs text-emerald-700 mt-1 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
          
          {/* Add to Cart / Quantity Controls */}
          {!cartItem ? (
            <motion.button
              onClick={() => onAddToCart(item)}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 sm:py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow"
              data-testid={`add-to-cart-${item.id}`}
            >
              ADD
            </motion.button>
          ) : (
            <div className="flex items-center justify-between bg-emerald-50 rounded-lg border-2 border-emerald-600 overflow-hidden" data-testid={`quantity-controls-${item.id}`}>
              <motion.button
                onClick={handleDecrement}
                whileTap={{ scale: 0.85 }}
                className="flex-1 py-2 sm:py-2.5 text-emerald-700 hover:bg-emerald-100 transition-colors flex items-center justify-center min-h-[36px]"
                data-testid={`decrement-${item.id}`}
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </motion.button>
              <div className="px-3 py-2 text-emerald-900 font-bold text-sm sm:text-base min-w-[36px] text-center border-x-2 border-emerald-600" data-testid={`quantity-${item.id}`}>
                {cartItem.quantity}
              </div>
              <motion.button
                onClick={handleIncrement}
                whileTap={{ scale: 0.85 }}
                className="flex-1 py-2 sm:py-2.5 text-emerald-700 hover:bg-emerald-100 transition-colors flex items-center justify-center min-h-[36px]"
                data-testid={`increment-${item.id}`}
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const MenuSection = ({ menuData, addToCart, cart, updateQuantity }) => {
  const categories = [
    { key: 'teaCoffee', title: 'Tea & Coffee', number: '01' },
    { key: 'coldBeverages', title: 'Cold Beverages', number: '02' },
    { key: 'shakes', title: 'Shakes', number: '03' },
    { key: 'mocktails', title: 'Mocktails', number: '04' },
    { key: 'snacksPatties', title: 'Snacks & Patties', number: '05' },
    { key: 'maggi', title: 'Maggi', number: '06' },
    { key: 'burgerPasta', title: 'Burger & Pasta', number: '07' },
    { key: 'chinese', title: 'Chinese', number: '08' },
    { key: 'pizza', title: 'Pizza', number: '09' },
    { key: 'sandwich', title: 'Sandwich', number: '10' },
    { key: 'breakfast', title: 'Breakfast', number: '11' },
    { key: 'riceDal', title: 'Rice / Dal', number: '13' },
    { key: 'paneerSpecial', title: 'Paneer Special', number: '14' },
    { key: 'vegSpecial', title: 'Veg Special', number: '15' },
    { key: 'thalis', title: 'Thalis', number: '16' },
    { key: 'coldDrinks', title: 'Cold Drinks', number: '17' },
    { key: 'mineralWater', title: 'Mineral Water', number: '18' }
  ];

  return (
    <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-red-500 text-white rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-red-500/50 mb-4 sm:mb-6"
          >
            FREE DELIVERY
          </motion.div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-emerald-900 mb-2 sm:mb-4">
            Our <span className="text-amber-500">Menu</span>
          </h2>
          <p className="text-sm sm:text-xl text-emerald-700 max-w-2xl mx-auto px-4">
            Explore our delicious selection of freshly prepared dishes
          </p>
        </motion.div>

        {/* Menu Categories */}
        {categories.map((category) => {
          const items = menuData[category.key] || [];
          if (items.length === 0) return null;
          
          return (
            <div key={category.key} className="mb-10 sm:mb-16 md:mb-20" data-testid={`category-${category.key}`}>
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-6 mb-4 sm:mb-8 md:mb-12"
              >
                <div className="flex items-baseline gap-2 sm:gap-4">
                  <span className="text-3xl sm:text-5xl md:text-7xl font-black text-amber-400/30">{category.number}</span>
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-emerald-900">{category.title}</h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-900/20 to-transparent" />
              </motion.div>

              {/* Items Grid - 2 cols mobile, 3-4 cols desktop */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8">
                {items.map((item) => {
                  const cartItem = cart.find(ci => ci.id === item.id);
                  return (
                    <MenuItem
                      key={item.id}
                      item={item}
                      onAddToCart={addToCart}
                      cartItem={cartItem}
                      updateQuantity={updateQuantity}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
