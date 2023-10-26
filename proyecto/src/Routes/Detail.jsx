import React, { useEffect, useState } from "react";
import { Main } from "../Components/Main";
import { MainTitle } from "../Components/MainTitle";
import { useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css";

const Detail = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getData = async (param) => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${param}`
      );

      const convertData = await data.json();
      setData(convertData);
    } catch (error) {
      console.error("Error al obtener la información: ", error);
    }
  };

  useEffect(() => {
    getData(params.id);
  }, []);

  const renderPersonalData = () => (
    <div className={styles.dentistContainer}>
      <h2 className={styles.h2}>Datos Personales</h2>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Id</th>
            <th className={styles.th}>Nombre Completo</th>
            <th className={styles.th}>Nombre de Usuario</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Número de Teléfono</th>
            <th className={styles.th}>Página Web</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>{data.id}</td>
            <td className={styles.td}>{data.name}</td>
            <td className={styles.td}>{data.username}</td>
            <td className={styles.td}>{data.email}</td>
            <td className={styles.td}>{data.phone}</td>
            <td className={styles.td}>{data.website}</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.h2}>Datos de Dirección</h2>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Calle</th>
            <th className={styles.th}>Suite</th>
            <th className={styles.th}>Ciudad</th>
            <th className={styles.th}>Código Postal</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>{data.address.street}</td>
            <td className={styles.td}>{data.address.suite}</td>
            <td className={styles.td}>{data.address.city}</td>
            <td className={styles.td}>{data.address.zipcode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <Main>
      {data ? (
        <MainTitle>Detalle dentista</MainTitle>
      ) : (
        <MainTitle class={styles.loading}>Cargando...</MainTitle>
      )}
      {data && renderPersonalData()}
    </Main>
  );
};

export default Detail;

