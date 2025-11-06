const MenuItemShow = ({ item }) => {
  return (
    <div className="restaurant__menu-item-card">
      <div className="restaurant__menu-item-info">
        <p className="restaurant__menu-item-name">{item?.card?.info?.name}</p>
        <p className="restaurant__menu-item-price">
          {" "}
          {item?.card?.info?.defaultPrice / 100 ||
            item?.card?.info?.price / 100}
        </p>
        <p className="restaurant__menu-item-desc">
          {item?.card?.info?.description}
        </p>
      </div>
      <div className="restaurant__menu-item-action">
        <button className="restaurant__menu-item-add-btn">Add</button>
        <img src={`/images/${item?.card?.info?.imgName}`}></img>
      </div>
    </div>
  );
};
export default MenuItemShow;
