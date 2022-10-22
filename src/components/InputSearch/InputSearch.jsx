import React from "react";
import "./InputSearch.css";
import { useNavigate } from "react-router-dom";


const InputSearch = () => {
    const navigate = useNavigate();
    const Submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.TextSearch.value.trim().toLowerCase()}`)
    }



  return (
    <div className="InputSearch__Display">
      <div className="Input__Container">
        <form onSubmit={Submit} className='Form__Container'>
          <input id="TextSearch" type="text" placeholder="Search a Pokemon" className="TextSearch__Input"/>
          <button className="Btn_search">Search</button>

        </form>
      </div>
    </div>
  );
};

export default InputSearch;
