import React from "react";
import Form from "../Components/Form";
import { Main } from "../Components/Main";
import { MainTitle } from "../Components/MainTitle";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <Main className={styles.container}>
      <MainTitle> CONTÁCTANOS</MainTitle>
      <Form />
    </Main>
  );
};

export default Contact;
