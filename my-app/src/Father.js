import GrandSon from "./Grandson";

const Father = ({ a }) => {
  return (
    <div className="a">
      <h1>Father Cmponent</h1>
      {a}
      <GrandSon myWill={a}></GrandSon>
    </div>
  );
};
export default Father;
