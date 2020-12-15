import React from "react";

import styles from "../css-modules/SummaryList.module.css";

export default (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Thank you for your submission!</h1>
      <h3 className={styles.subheader}>
        We will reach out to you after reviewing your account
      </h3>
      <div className={styles.list}>
        <div className={styles.labelGroup}>
          <label className={styles.label}>First Name</label>
          <p className={styles.data}>{props.user.firstName}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>Last Name</label>
          <p className={styles.data}>{props.user.lastName}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>Email</label>
          <p className={styles.data}>{props.user.email}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>Phone</label>
          <p className={styles.data}>{props.user.phone}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>Date of Birth</label>
          <p className={styles.data}>{props.user.dateOfBirth}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>Street</label>
          <p className={styles.data}>{props.user.address.street}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>City</label>
          <p className={styles.data}>{props.user.address.city}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>State</label>
          <p className={styles.data}>{props.user.address.state}</p>
        </div>
      </div>

      <h1 className={styles.header}>Loan</h1>
      <div className={styles.list}>
        <div className={styles.labelGroup}>
          <label className={styles.label}>Loan Type</label>
          <p className={styles.data}>{props.loan.loanType}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>Property Use</label>
          <p className={styles.data}>{props.loan.propertyUse}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>Home Description</label>
          <p className={styles.data}>{props.loan.homeDescription}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>Plan To Purchase</label>
          <p className={styles.data}>{props.loan.planToPurchase || "N/A"}</p>
        </div>
        <div className={styles.labelGroup}>
          <label className={styles.label}>First Time Owner</label>
          <p className={styles.data}>{props.loan.firstTimeOwner || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};
