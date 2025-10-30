const Button = ({ txt, cls, func }) => {
  return (
    <button className={cls} onClick={func}>
      {txt}
    </button>
  );
};

export default Button;
