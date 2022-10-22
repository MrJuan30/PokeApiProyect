import { React, useState, useEffect } from "react";
import axios from "axios";
import "./InputSearch.css";

const SelectByType = ({ setTypeSelected }) => {
  const [types, settypes] = useState();

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";
    axios
      .get(URL)
      .then((res) => settypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setTypeSelected(e.target.value);
  };

  return (
    <div className="InputType__Container">
      <select onChange={handleChange} className='InputType-Select'>
        <option value="All Pokemons">All Pokemons</option>
        {types?.map((type) => (
          <option key={type.url} value={type.url}>
            {" "}
            {type.name}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectByType;
