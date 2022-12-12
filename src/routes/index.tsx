import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from "../pages/Pokemons";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/" element={<Pokemons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
