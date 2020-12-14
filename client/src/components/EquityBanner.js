import React from "react";

import styles from "../css-modules/EquityBanner.module.css";

export default () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subHeader}>
        Here is what Home Owners do not understand about their
      </h3>
      <h1 className={styles.header}>Home Equity and how to use it</h1>
      <button className={styles.btn}>Learn More</button>
    </div>
  );
};
