import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setUserNameGlobal } from "../../store/slices/username.slice";

const PokedexForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="Login__container-form">
      <form onSubmit={submit} action="" className="pokedex__form">
        <input
          type="text"
          className="pokedex__input"
          placeholder="Enter Your Name."
        />
          <button className="pokedex__btn"><ion-icon name="arrow-forward-outline"></ion-icon></button>
      </form>
    </div>
  );
};

export default PokedexForm;
