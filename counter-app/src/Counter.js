const Counter = ({ val, handleDecrement, handleIncrement }) => {
  return (
    <div className="counterContainer">
      <p>{val}</p>
      <div className="btnContainer">
        <button className="inc" onClick={handleIncrement}>
          Increment
        </button>
        <button className="dec" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
