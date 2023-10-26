import React, { useContext } from "react";
import { ThemeContext } from "./utils/themeContext.jsx";
import { FavoritesContext } from "./utils/favoriteContext.jsx";
import { Link } from "react-router-dom";
import {
  FormControlLabel,
  FormGroup,
  Switch,
  styled,
} from "@mui/material";
import styles from "../styles/Navbar.module.css";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {},
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme === "dark" ? "#00183e" : "#000810",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src="/DH.ico" alt="logo app" className={styles.logo} />
    </Link>
  </div>
);

const NavLink = ({ to, children }) => (
  <Link to={to} className={styles.link}>
    {children}
  </Link>
);

const NavbarLinks = () => (
  <div className={styles.links}>
    <NavLink to="/">Menú principal</NavLink>
    <NavLink to="/favs">Favs</NavLink>
    <NavLink to="/contacto">Contacto</NavLink>
  </div>
);

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={theme === "dark"}
            onClick={toggleTheme}
            theme={theme}
          />
        }
      />
    </FormGroup>
  );
};

const Navbar = () => {
  const { cantFavorites } = useContext(FavoritesContext);

  return (
    <header>
      <nav className={styles.nav}>
        <Logo />
        <NavbarLinks />
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Navbar;

