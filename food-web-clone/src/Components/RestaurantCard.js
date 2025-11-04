const RestaurantCard = ({ restaurantsData, show }) => {
  return (
    <div className="card">
      <img
        alt="res"
        src={`/images/${restaurantsData?.info.cloudinaryImageId}.avif`}
      ></img>
      <div className="card__details">
        <h3 className="card__name">{restaurantsData?.info.name}</h3>
        {show && (
          <>
            <div className="card__cuisines">
              {restaurantsData?.info.cuisines.join(", ")}
            </div>
            <div className="card__price">
              {restaurantsData?.info.costForTwo}
            </div>
            <div className="card__info">
              <span className="card__rating">
                {restaurantsData?.info.avgRating} Rating
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
