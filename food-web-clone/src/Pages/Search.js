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
  console.log(filteredResults);

  useEffect(() => {
    setTimeout(() => {
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
    }, 2000);
  }, [inputVal, navigate]);
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  console.log(inputVal);

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
      {!isInputEmpty && filteredResults ? (
        <div className="search__not-found">
          <p>This restaurant is not listed</p>
          <p>Please enter some Other Restaurant Name</p>
        </div>
      ) : (
        <div className="searched">
          {filteredResults.map((res) => {
            return (
              <div className="searchedData">
                <img src={`/images/${res.info.cloudinaryImageId}`}></img>
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
