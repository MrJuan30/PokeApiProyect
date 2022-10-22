import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PokedexById.css";
import Pokemon404 from "./Pokemon404";

const PokedexById = () => {
  const { id } = useParams();
  const [pokemon, setpokemon] = useState();
  const navigate = useNavigate();

  const [error, seterror] = useState(false)

  const HandleClickPlus = () => {
    navigate(`/pokedex/${pokemon.id + 1}`);
  };
  const HandleClickMinus = () => {
    navigate(`/pokedex/${pokemon.id - 1}`);
  };

  const HandleBack = () => {
    navigate("/pokedex");
  };

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(URL)
      .then((res) => setpokemon(res.data))
      .catch((err) =>{
      console.log(err)
      seterror(true)
    });
  }, [id]);

  if(error){
    return <Pokemon404 />
  }

  return (
    <article className="PokemonById">
      <button onClick={HandleBack} className="BackToIndex">
        <ion-icon name="chevron-back-outline"></ion-icon>
        <span>Back</span> 
      </button>
      <div className={`Pokemon__Container bg-${pokemon?.types[0].type.name}`} >
        <header>
          <button onClick={HandleClickMinus} className="Button-Back">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt={pokemon?.name}
            className="Pokemon-image"
          />
          <button onClick={HandleClickPlus} className="Button-Next">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </header>
        <div className="Pokemon__Container-info">
          <h1 className="Pokemon-id">#{pokemon?.id}</h1>
          <h2 className="Pokemon-title">{pokemon?.name}</h2>
          <div className="Pokemon__Container-Information">
            <p className="Height">
              {pokemon?.height} Ft | {pokemon?.weight} Lb
            </p>
          </div>
          <div className="Pokemon__Container-stats">
            <ul className="Pokemon-stats">
              {pokemon?.stats.map((stat) => (
                <li className="Pokemon-stats-list" key={stat.stat.url}>
                  <span className="name__stat">{stat.stat.name}</span>
                  <br />
                  <span className="value_stat">{stat.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
          <div className="Abilities__Container-info">
            <h4 className="Abilities-title">Skill/s:</h4>
            <ul>
              {pokemon?.abilities.map((ability) => (
                <li key={ability.ability.url}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        <div className="Abilities__Container Types__Container">
          <div className="Abilities__Container-info">
            <h4 className="Abilities-title">Type/s:</h4>
            <ul>
              {pokemon?.types.map((type) => (
                <li key={type.type.url}>{type.type.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="Moves__Container">
        <h3 className="Pokemon-Moves-title">Moves:</h3>
        <ul className="Pokemon-Moves__Ul">
          {pokemon?.moves.map((move) => (
            <li key={move.move.url}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PokedexById;
