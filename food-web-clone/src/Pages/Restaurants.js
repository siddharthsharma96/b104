import { useEffect, useState } from "react";
import "./../Style/restaurant.css";
import { useParams, useOutletContext } from "react-router-dom";
import RestaurantMenu from "../Components/RestaurantMenu";
import RestaurantInfo from "../Components/RestaurantInfo";

const Restaurants = () => {
  const { resId } = useParams();
  const { restaurantsData } = useOutletContext();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const found = restaurantsData.find((res) => res?._id === resId);
        const ress = await fetch(
          `http://localhost:9000/api/v1/restaurant/${resId}`
        );
        const found = await ress.json();
        setRestaurant(found.restaurant);
        const response = await fetch("http://localhost:9000/api/v1/menu");
        const data = await response.json();
        setMenu(data.data.menuData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [restaurantsData]);
  return (
    <div className="restaurant">
      <div className="restaurant__breadcrumb">
        <span>Home/Noida/{restaurant?.name}</span>
      </div>
      <div className="restaurant__container">
        <RestaurantInfo restaurant={restaurant} />
        <div className="restaurant__menu">
          {menu.map((item, i) => (
            <RestaurantMenu menuData={item} key={i * 4} i={i}></RestaurantMenu>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
