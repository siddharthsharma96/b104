import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:9000/api/v1/restaurant");
        const data = await response.json();

        setRestaurantsData(data.data.restaurantdata);
        console.log(restaurantsData);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const addItem = (item) => {
    const existingIndex = cartItems.findIndex(
      (cartItems) => cartItems.card.info.id === item.card.info.id
    );
    console.log(existingIndex);

    if (existingIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    console.log(cartItems);
  };

  const removeItem = (item) => {
    const existingIndex = cartItems.findIndex(
      (cartItems) => cartItems.card.info.id === item.card.info.id
    );
    if (existingIndex !== -1) {
      const updatedCart = [...cartItems];
      if (updatedCart[existingIndex].quantity > 1) {
        updatedCart[existingIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingIndex, 1);
      }
      setCartItems(updatedCart);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Header cartItems={cartItems}></Header>
      <Outlet
        context={{
          restaurantsData,
          setRestaurantsData,
          loading,
          setCartItems,
          addItem,
          cartItems,
          removeItem,
          clearCart,
        }}
      ></Outlet>
    </div>
  );
}

export default App;
