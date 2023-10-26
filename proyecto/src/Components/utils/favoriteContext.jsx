import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const cantFavorites = favorites.length;

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    if (cantFavorites > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      localStorage.removeItem("favorites");
    }
  }, [favorites]);

  const addFavorite = (item) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
  };

  const removeFavorite = (item) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== item.id
    );
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ cantFavorites, favorites, addFavorite, removeFavorite }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};