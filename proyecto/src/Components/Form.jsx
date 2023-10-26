import React, { useState } from "react";
import styles from "../styles/Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpiar mensajes anteriores
    setError("");
    setSuccess("");

    if (name.trim().length < 5 || name.trim() === "") {
      setError("ERROR! Verifique su información nuevamente");
      return;
    }

    if (!emailRegex.test(email) || email.trim() === "") {
      setError("ERROR! Verifique su información nuevamente");
      return;
    } else {
      let data = {
        name,
        email,
      };
      console.log(data);

      setSuccess(`¡Gracias por contactarnos! Gracias ${name}, Nos comunicaremos contigo!`);

      setName("");
      setEmail("");
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Nombre Completo
        </label>
        <input
          type="text"
          id="name"
          placeholder="Nombre Completo"
          className={styles.input}
          value={name}
          onChange={onChangeName}
        />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={onChangeEmail}
        />
        <button className={styles.submitButton}>Enviar</button>

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </form>
    </>
  );
};

export default Form;
