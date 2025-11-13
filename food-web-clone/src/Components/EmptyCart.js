import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart">
      <img src="/images/Cart_empty.png"></img>
      <p>Your Cart is empty</p>
      <span>You can go to home page to view more restaurants</span>
      <button onClick={() => navigate("/")}>See restaurants near you</button>
    </div>
  );
};

export default EmptyCart;
