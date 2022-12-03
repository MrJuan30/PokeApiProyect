import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./PokedexIndex.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import PokeCard from "../PokeCard/PokeCard";
import InputSearch from "../InputSearch/InputSearch";
import SelectByType from "../InputSearch/SelectByType";
import Pagination from "./Pagination";

const PokedexIndex = () => {
  const userName = useSelector((state) => state.UserName);
  const [pokemons, setpokemons] = useState();
  const [TypeSelected, setTypeSelected] = useState("All Pokemons");
  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(8);
  const initialPoke = (page - 1) * pokePerPage;
  const finalPoke = page * pokePerPage;

  useEffect(() => {
    if (TypeSelected !== "All Pokemons") {
      axios
        .get(TypeSelected)
        .then((res) => {
          const result = res.data.pokemon.map((e) => e.pokemon);
          setpokemons(result);
        })
        .catch((err) => console.log(err));
    } else {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";
      axios
        .get(URL)
        .then((res) => setpokemons(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [TypeSelected]);

  return (
    <article>
      {pokemons ? (
        <div className="container">
          <div className="Welcome">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="Welcome__container"
            >
              <h1>
                <span className="Welcome-grettings">Welcome</span>
                <br />
                <span className="UserName">{userName}</span>
                <br />
                To your Pokedex
              </h1>
              <img
                src="https://cdn.pixabay.com/photo/2016/09/09/11/59/pokemon-1656997_1280.png"
                alt="Pikachu and Coffe"
              />
            </motion.div>
          </div>
          <div className="InputSearch__Container">
            <div className="Inputs__Container">
              <InputSearch />
              <SelectByType setTypeSelected={setTypeSelected} />
            </div>
          </div>
          <div className="Cards__container">
            {pokemons?.slice(initialPoke, finalPoke).map((pokemon) => (
              <PokeCard key={pokemon.url} url={pokemon.url} />
            ))}
          </div>
          <div className="Pagination__Footer">
            <Pagination
              pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      ) : (
        <div className="Loading__screen">
          <LoadingScreen />
        </div>
      )}
    </article>
  );
};

export default PokedexIndex;
