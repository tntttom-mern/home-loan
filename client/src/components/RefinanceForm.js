import React, { useState } from "react";

import styles from "../css-modules/RefinanceForm.module.css";

export default () => {
  const [propertyUse, setPropertyUse] = useState("");
  const [homeDescription, setHomeDescription] = useState("");

  return (
    <form className={styles.formContainer}>
      <h1 className={styles.formHeader}>Home Refinance</h1>

      <div className={styles.inputGroup}>
        <label className={styles.groupLabel}>Property Use</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="propertyUse"
              value="Primary Residence"
              type="radio"
            />
            Primary Residence
          </label>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="propertyUse"
              value="Secondary Home"
              type="radio"
            />
            Secondary Home
          </label>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="propertyUse"
              value="Investment Property"
              type="radio"
            />
            Investment Property
          </label>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.groupLabel}>Home Description</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="homeDescription"
              value="Single Family"
              type="radio"
            />
            Single Family
          </label>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="homeDescription"
              value="Multi Family"
              type="radio"
            />
            Multi Family
          </label>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="homeDescription"
              value="Condominium"
              type="radio"
            />
            Condominium
          </label>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="homeDescription"
              value="Townhouse"
              type="radio"
            />
            Townhouse
          </label>
        </div>
      </div>
    </form>
  );
};
