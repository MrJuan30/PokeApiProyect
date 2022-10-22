import { React, useState, useEffect } from "react";
import axios from "axios";
import "./PokeCard.css";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [pokemon, setpokemon] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setpokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate()

  const HandleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }
  return (
    <div className="PokeCard__Container">
      <div className={`PokeCard__Card bg-${pokemon?.types[0].type.name}`} onClick={HandleClick}>
        <header>
          <h3 className="PokeCard__Name">{pokemon?.name}</h3>
          <img
            src={pokemon?.sprites.front_default}
            alt="Pokemon"
            className="Pokemon__Image"
          />
        </header>
        <ul className="PokeCard__List-types">
          <p>Type/s:</p>
          {pokemon?.types.map((type) => (
            <li  key={type.slot} >{type.type.name}</li>
          ))}
        </ul>
        <div className="Pokecard__Info">
          <p className="Pokecard__Types-titles">Info:</p>
          <br />
          <ul className="Pokecard__Container-stats">
            {pokemon?.stats.map((stat) => (
              <li className="Pokecard__Container-stats-list"   key={stat.stat.name} >
                <span className="stat__name">{stat.stat.name}</span>
                <br />
                <span className="stat__value">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
