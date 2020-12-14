import React, { useState } from "react";
import { Link } from "@reach/router";
import logo from "../images/phmc_logo.png";
import styles from "../css-modules/NavBar.module.css";

export default () => {
  return (
    <div className="container">
      <ul className={styles.navList}>
        <Link to="/">
          <img className={styles.logoImg} src={logo} alt="Logo of PHMC" />
        </Link>
        <Link className={styles.navLink} to="/">
          Experience
        </Link>
        <Link className={styles.navLink} to="/">
          Educate
        </Link>
        <Link className={styles.navLink} to="/">
          Programs
        </Link>
        <Link className={styles.navLink} to="/">
          About Us
        </Link>
        <Link className={styles.navLink} to="/">
          Careers
        </Link>
        <Link className={styles.navLink} to="/">
          Locations
        </Link>{" "}
        |
        <Link className={styles.navLink} to="/">
          1-800-9LENDER
        </Link>
        <Link to="/">
          <button className={styles.talkBtn}>Talk to us</button>
        </Link>
      </ul>
    </div>
  );
};
