import Button from "./Button";

const ButtonContainer = ({ handleDecrement, handleIncrement }) => {
  return (
    <div className="btnContainer">
      <Button txt="Inc" cls="inc" func={handleIncrement}></Button>
      <Button txt="Dec" cls="dec" func={handleDecrement}></Button>
    </div>
  );
};

export default ButtonContainer;
