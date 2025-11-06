import MenuItemShow from "./MenuItemShow";

const RestaurantMenu = ({ menuData }) => {
  return (
    <div className="restaurant__menu-category">
      <div className=" foodCat">
        <p>
          {menuData?.card?.card?.title}({menuData?.card?.card.itemCards.length})
        </p>
      </div>
      <div className="restaurant__menu-items">
        {menuData?.card?.card.itemCards &&
          menuData?.card?.card.itemCards.map((item) => {
            return <MenuItemShow item={item}></MenuItemShow>;
          })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
