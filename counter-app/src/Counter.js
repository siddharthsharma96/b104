import ButtonContainer from "./ButtonContainer";

const Counter = ({ val, handleDecrement, handleIncrement, pref }) => {
  return (
    <div className="counterContainer">
      <p ref={pref}>{val}</p>
      <ButtonContainer
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></ButtonContainer>
    </div>
  );
};

export default Counter;
