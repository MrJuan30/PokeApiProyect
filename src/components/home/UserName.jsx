import React from "react";
import PokedexForm from "./PokedexForm";
import "./PokedexForm.css";

const UserName = () => {
  return (
    <div className="Login__Container">
      <div className="Login__Container-information">
        <h1>Hi Trainer!</h1>
        <h2>
          Before continuing, please tell me your <span>Name</span>
        </h2>
        <PokedexForm />
      </div>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/5dfc8648-e755-40a9-a947-0101801f5b9c/ddy2ypz-4aab5393-8f40-492a-ac35-e498732e48f5.png"
        alt=""
      />
    </div>
  );
};

export default UserName;
