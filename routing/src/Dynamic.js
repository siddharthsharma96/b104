import { useParams } from "react-router-dom";

const Dynamic = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Dynamic Page with url {id}</h1>
    </div>
  );
};

export default Dynamic;
