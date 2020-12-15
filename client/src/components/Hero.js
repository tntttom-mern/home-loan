import React from "react";

import { Link } from "@reach/router";

import styles from "../css-modules/Landing.module.css";

export default () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroHeader}>
          Found the Perfect Home? <br /> Let Us Help You Finance It.
        </h1>
        <p className={styles.heroText}>
          Platinum Home Mortgage stands as one of America’s premier lenders. We
          are currently licensed and operating in 50 states, including the
          District of Columbia. We offer traditional and innovative home
          financing solutions to meet the needs of almost anyone
        </p>
        <div className={styles.buttonContainer}>
          <Link to="/home-purchase">
            <button className={styles.btn}>Buy a Home</button>
          </Link>
          <Link to="/home-refinance">
            <button className={styles.btn}>Refinance</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
