import axios from "axios";
import { useState, useEffect, React } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserName from "./components/home/UserName";
import PokedexIndex from "./components/pokedex/PokedexIndex";
import { Orbit } from "@uiball/loaders";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PokedexById from "./components/pokedexId/PokedexById.jsx";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const userName = useSelector((state) => state.UserName);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserName />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<PokedexIndex />} />
          <Route path="/pokedex/:id" element={<PokedexById />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
