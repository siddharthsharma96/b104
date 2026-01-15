import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurantsData, show }) => {
  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate(`/restaurant/${restaurantsData?._id}`);
  };
  return (
    <div className="card" onClick={redirectHandler}>
      <img
        alt="res"
        src={`/images/${restaurantsData.cloudinaryImageId}.avif`}
      ></img>
      <div className="card__details">
        <h3 className="card__name">{restaurantsData?.name}</h3>
        {show && (
          <>
            <div className="card__cuisines">
              {restaurantsData?.cuisines.join(", ")}
            </div>
            <div className="card__price">{restaurantsData?.costForTwo}</div>
            <div className="card__info">
              <span className="card__rating">
                {restaurantsData?.avgRating} Rating
              </span>
              <span className="card__time">3.2 mins</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
