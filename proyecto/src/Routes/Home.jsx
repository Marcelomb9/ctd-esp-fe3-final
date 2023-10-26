import { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import { Main } from "../Components/Main";
import { MainTitle } from "../Components/MainTitle";
import { FavoritesContext } from "../Components/utils/favoriteContext";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { favorites, cantFavorites } = useContext(FavoritesContext);

  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");

    const convert = await data.json();
    setDentists(convert);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleId = (id) => {
    return id;
  };

  return (
    <Main>
      <MainTitle className={styles.mainTitle}>Menú Principal</MainTitle>
      <div className={styles.cardGrid}>
        {dentists.map((dentist) => (
          <Card
            name={dentist.name}
            username={dentist.username}
            key={dentist.id}
            onClick={handleId(dentist.id)}
            isFavorite={
              cantFavorites > 0 ? favorites.some((favDentist) => favDentist.id === dentist.id) : false
            }
          />
        ))}
      </div>
    </Main>
  );
};

export default Home
