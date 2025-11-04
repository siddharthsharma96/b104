import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/Restaurant.json");
        const data = await response.json();
        setRestaurantsData(data);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <Header></Header>
      <Outlet
        context={{
          restaurantsData,
          loading,
        }}
      ></Outlet>
    </div>
  );
}

export default App;
