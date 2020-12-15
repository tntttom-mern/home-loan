import React, { useState } from "react";

import styles from "../css-modules/HomeForm.module.css";

export default (props) => {
  const {
    setPropertyUse,
    setHomeDescription,
    setTimeframe,
    setFirstTimeOwner,
  } = props;

  return (
    <form className={styles.formContainer}>
      <h1 className={styles.formHeader}>Home Purchase</h1>

      <div className={styles.inputGroup}>
        <label className={styles.groupLabel}>Property Use</label>
        <div
          className={styles.radioGroup}
          onChange={(e) => setPropertyUse(e.target.value)}
        >
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
        <div
          className={styles.radioGroup}
          onChange={(e) => setHomeDescription(e.target.value)}
        >
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

      <div className={styles.inputGroup}>
        <label className={styles.groupLabel}>Timeframe of Purchase</label>
        <div
          className={styles.radioGroup}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="timeframePurchase"
              value="0-3 Months"
              type="radio"
            />
            0-3 Months
          </label>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="timeframePurchase"
              value="3-6 Months"
              type="radio"
            />
            3-6 Months
          </label>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="timeframePurchase"
              value="6-9 Months"
              type="radio"
            />
            6-9 Months
          </label>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="timeframePurchase"
              value="1 Year"
              type="radio"
            />
            1 Year
          </label>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.groupLabel}>First Time Owner?</label>
        <div
          className={styles.radioGroup}
          onChange={(e) => setFirstTimeOwner(e.target.value)}
        >
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="firstTimeOwner"
              value="Yes"
              type="radio"
            />
            Yes
          </label>
          <label className={styles.radioItem}>
            <input
              className={styles.radio}
              name="firstTimeOwner"
              value="No"
              type="radio"
            />
            No
          </label>
        </div>
      </div>
    </form>
  );
};
