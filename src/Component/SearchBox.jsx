import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Heading from "./Heading";

const SearchBox = () => {
  // This state var is for handling a search input
  const [input, setInput] = useState("");

  // This state var is for storing a search results
  const [showResult, setShowResult] = useState([]);

  // This state var is for showing or hidding result-container
  const [resContainer, setResContainer] = useState(false);

  // This state var is for caching a previous search
  const [cache, setCache] = useState({});

  // This is state var for getting ref of all the search results
  const refResults = useRef([]);

  // This is a url of searching dummy json
  const URL = "https://dummyjson.com/recipes/search?q=";

  // This function is for searching a api (dummy api from dummy json)
  const fetchData = async () => {
    if (cache[input]) {
      console.log(" Returned from cache " + input);
      setShowResult(cache[input]);
      return;
    }
    const data = await fetch(URL + input);
    const res = await data.json();

    setShowResult(res?.recipes);
    console.log("input : ", input);

    // set a cache for performance
    setCache((prev) => ({ ...prev, [input]: res?.recipes }));
  };

  // This function is for handling a input search change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // This function is for result container navigation through arrow keys
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      //   alert(refResults.current[index]);
      refResults.current[0]?.focus();
      setResContainer(true);
    }
  };

  // This useEffect is for fetching a data
  useEffect(() => {
    const timeout = setTimeout(fetchData, 500);

    // This is return function is called when input change before
    return () => {
      console.log("cleaner called");
      clearTimeout(timeout);
    };
  }, [input]);

  return (
    <div>
      <div>
        <Heading text={"Autocomplete Search"} align={"center"} />
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Enter for search..."
          name="search"
          onChange={(e) => {
            handleChange(e);
          }}
          onFocus={() => {
            setResContainer(true);
          }}
          onBlur={() => {
            setResContainer(false);
          }}
          value={input}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        />
      </div>
      {resContainer && (
        <div className="result-container">
          {showResult &&
            showResult.map((value, index) => {
              return (
                <span
                  tabIndex={index}
                  ref={(res) => {
                    refResults.current[index] = res;
                  }}
                  key={value.id}
                  className="result"
                >
                  {value.name}
                </span>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
