import AccountSection from "./AccountSection";

const CartItems = ({
  cartItems,
  addItem,
  removeItem,
  totalPrice,
  handlePayment,
}) => {
  console.log(cartItems);

  return (
    <div className="cart-items">
      <AccountSection handlePayment={handlePayment}></AccountSection>
      <div className="cart-items__info">
        <div className="cart-items__info-container">
          <div className="cart-items__amount-heading">
            <h3>Items in Cart</h3>
          </div>
          <div className="cart-items__scrollable-content">
            {cartItems.map((r) => (
              <div className="cart-items__added-item">
                <p>{r.card.info.name}</p>
                <div className="cart-items__button-container">
                  <button
                    onClick={() => {
                      removeItem(r);
                    }}
                  >
                    -
                  </button>
                  <span>{r.quantity}</span>
                  <button onClick={() => addItem(r)}>+</button>
                </div>
                <span>
                  ₹ {r.card.info.defaultPrice / 100 || r.card.info.price / 100}
                </span>
              </div>
            ))}
            <div className="cart-items__bill-details">
              <h3>Bill details</h3>
              <div>
                <p>Item Total</p>
                <p>₹ 625</p>
              </div>
              <div>
                <p>Delivery Fee | 3.0 kms</p>
                <p>₹ 43</p>
              </div>
              <div>
                <p>Platform fee</p>
                <p>₹ 5</p>
              </div>
              <div>
                <p>GST and Restaurant Charges</p>
                <p>₹ 79</p>
              </div>
            </div>
          </div>
          <div className="cart-items__amount">
            <p>TO PAY</p>
            <p>{totalPrice}</p>
          </div>
        </div>
        <div className="cart-items__policy">
          <div>
            <h4>
              Review your order and address details to avoid cancellations
            </h4>
            <p>
              <span>Note:</span>If you cancel within 60 seconds of placing your
              order, a 100% refund will be issued. No refund for cancellations
              made after 60 seconds.
            </p>
            <p>Avoid cancellation as it leads to food wastage.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
