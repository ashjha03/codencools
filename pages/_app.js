import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState , useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState(false)

  useEffect(() => {
    try {
if (localStorage.getItem("usertoken")) {
        setUser(true);
        
      }else if (localStorage.getItem("sellertoken")) {
        setUser(true);
        
      }else{
        setUser(false);
      }



      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subT = 0;
    let keys = Object.keys(cart);
    for (let i = 0; i < keys.length; i++) {
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subT);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const addToCart = (itemCode, qty, price, name) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty, itemCode, price, name };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const logout = () => {
    localStorage.clear();
    setUser(false)
    
    router.push("/")
  }
  const removeFromCart = (itemCode, qty, price, name) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  return (
    <div>
      <Navbar addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} cart={cart} subTotal={subTotal} logout={logout} user={user}/>
      <Component addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} cart={cart} subTotal={subTotal} {...pageProps} setUser={setUser} />
      <Footer />
    </div>
  );
}

