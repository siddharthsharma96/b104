import { useEffect, useState } from "react";
import "./../Style/search.css";
import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
const Search = () => {
  const { restaurantsData } = useOutletContext();
  const [inputVal, setInputVal] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setInputVal(queryParam);
    }
  }, [searchParams]);
  console.log("Filtered", filteredResults);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInputEmpty(inputVal === "");
      navigate(`?query=${inputVal}`);
      if (inputVal.trim() !== "") {
        const filteredResults = restaurantsData.filter((res) => {
          return res.info.name.toLowerCase().includes(inputVal.toLowerCase());
        });
        setFilteredResults(filteredResults);
      } else {
        setFilteredResults([]);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [inputVal, navigate]);
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="search">
      <div className="search__container">
        <input
          value={inputVal}
          type="text"
          className="search__field"
          onChange={handleChange}
        ></input>
      </div>
      {isInputEmpty && <h3 className="heading">Popular restaurants </h3>}
      {!isInputEmpty && filteredResults.length === 0 ? (
        <div className="search__not-found">
          <p>This restaurant is not listed</p>
          <p>Please enter some Other Restaurant Name</p>
        </div>
      ) : (
        <div className="searched">
          {filteredResults.map((res) => {
            return (
              <div
                onClick={() => navigate(`/restaurant/${res.info.id}`)}
                className="searchedData"
                key={res.info.id}
              >
                <img
                  src={`/images/${res.info.cloudinaryImageId}.avif`}
                  alt="as"
                ></img>
                <div>
                  <p>{res.info.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
