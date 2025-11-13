import MenuItemShow from "./MenuItemShow";

const RestaurantMenu = ({ menuData, i }) => {
  console.log(menuData);

  return (
    <div key={i} className="restaurant__menu-category">
      <div className=" foodCat">
        <p>
          {menuData?.card?.card?.title}({menuData?.card?.card.itemCards.length})
        </p>
      </div>
      <div className="restaurant__menu-items">
        {menuData?.card?.card.itemCards &&
          menuData?.card?.card.itemCards.map((item, i) => {
            return <MenuItemShow key={i} item={item}></MenuItemShow>;
          })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
