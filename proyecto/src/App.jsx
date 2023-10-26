import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Detail from "./Routes/Detail.jsx";
import Favs from "./Routes/Favs.jsx";
import Contact from "./Routes/Contact.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
