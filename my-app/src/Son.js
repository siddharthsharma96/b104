import Father from "./Father";

const Son = ({ yourWill }) => {
  return (
    <div className="a">
      <h1>Son Cmponent</h1>
      {yourWill}
      <Father a={yourWill}></Father>
    </div>
  );
};
export default Son;
