import React, { useState } from "react";
import "@/App.css";
import { Header, Footer } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { CartDrawer } from "@/components/CartDrawer";
import { menuData } from "@/data/menuData";
import { useCart } from "@/hooks/useCart";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, cartTotal, addToCart, updateQuantity, removeFromCart, getCartItemsCount } = useCart();
  
  // Enable smooth scrolling
  useSmoothScroll();

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      duration: 2000,
      position: "top-center"
    });
  };

  return (
    <div className="App">
      <Toaster />
      <Header 
        cartCount={getCartItemsCount()} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="pt-14 sm:pt-20">
        <Hero />
        <MenuSection 
          menuData={menuData} 
          addToCart={handleAddToCart}
          cart={cart}
          updateQuantity={updateQuantity}
        />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
