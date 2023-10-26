import React from "react";
import styles from "../styles/MainTitle.module.css";

export const MainTitle = (props) => {
  return (
    <h1 className={props.class ? `${props.class}` : `${styles.h1}`}>
      {props.children}
    </h1>
  );
};
