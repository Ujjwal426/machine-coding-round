import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cache, _] = useState({});

  useEffect(() => {
    const i = setTimeout(() => {
      if (searchText) {
        fetchData();
      } else {
        setSearchResults([]);
      }
    }, 1000);

    return () => clearTimeout(i);
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
      return;
    } else {
      const data = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + searchText
      );
      const json = await data.json();
      cache[searchText] = json[1];
      setSearchResults(json[1]);
    }
  };

  return (
    <div className="flex justify-center bg-white m-4">
      <div className="w-full max-w-md">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search..."
        />

        {searchResults?.length > 0 && (
          <ul className="border border-gray-300 rounded-md mt-2 bg-white shadow-md">
            {searchResults?.map((search, index) => {
              return (
                <li
                  className="p-2 hover:bg-gray-50 cursor-pointer text-gray-700"
                  key={index}
                >
                  {search}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
