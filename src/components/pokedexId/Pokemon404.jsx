import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pokemon404.css";

const Pokemon404 = () => {
  const navigate = useNavigate();
  const HandleBack = () => {
    navigate("/pokedex");
  };
  return (
    <div className="Error__Container">
      <div className="Error__Info">
        <h1>POKEMON NOT FOUND</h1>
        <img
          src="https://mystickermania.com/cdn/stickers/memes/sticker_2134-512x512.png"
          alt=""
        />
        <br />
        <button onClick={HandleBack} className="Btn__Back">
          <span>Back</span>
        </button>
      </div>
    </div>
  );
};

export default Pokemon404;
