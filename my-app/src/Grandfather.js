import Son from "./Son";

const GrandFather = (props) => {
  console.log(props);

  return (
    <div className="a">
      <h1>GrandFather Cmponent</h1>
      {props.myWill}
      <Son yourWill={props.myWill}></Son>
    </div>
  );
};
export default GrandFather;
