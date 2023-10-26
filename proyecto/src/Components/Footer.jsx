import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <p className={styles.text}>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" className={styles.imgLogo} />
      </div>
      <div className={styles.socialMediaContainer}>
        <a href="https://es-la.facebook.com/" target="_BLANK">
          <FontAwesomeIcon
            icon={faFacebook}
            className={styles.imgMedia}
            id={styles.facebook}
          />
        </a>
        <a href="https://www.instagram.com/" target="_BLANK">
          <FontAwesomeIcon
            icon={faInstagram}
            className={styles.imgMedia}
            id={styles.instagram}
          />
        </a>
        <a href="https://www.tiktok.com/explore?" target="_BLANK">
          <FontAwesomeIcon
            icon={faTiktok}
            className={styles.imgMedia}
            id={styles.tiktok}
          />
        </a>
        <a href="https://www.whatsapp.com/?lang=es" target="_BLANK">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className={styles.imgMedia}
            id={styles.whatsapp}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
