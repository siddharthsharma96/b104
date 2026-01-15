import { useOutletContext } from "react-router-dom";
import "./../Style/home.css";
import RestaurantCard from "../Components/RestaurantCard";
import Carousel from "../Components/Carousel";
const Home = () => {
  const { restaurantsData, loading } = useOutletContext();

  return (
    <div className="home">
      <Carousel></Carousel>
      <h2 className="home__heading">
        Restaurants with online food delivery in Noida
      </h2>
      <div className="home__card-container">
        {loading ? (
          <h2>Loadinng...</h2>
        ) : (
          restaurantsData.map((res) => {
            return (
              <RestaurantCard
                show={true}
                key={res._id}
                restaurantsData={res}
              ></RestaurantCard>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
