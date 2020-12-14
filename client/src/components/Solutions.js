import React from "react";

import image1 from "../images/smallImage1.png";
import image2 from "../images/smallImage2.png";

import styles from "../css-modules/Solutions.module.css";

export default () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.solutionLabel}>More Solutions</h1>

      <div className={styles.solutionsContainer}>
        <div className={styles.solutionOne}>
          <img
            className={styles.solutionOneImg}
            src={image1}
            alt="Picture of paperwork"
          />
          <div className={styles.solutionText}>
            <h3 className={styles.solutionHeader}>
              Now Hiring experienced Loan Processors & Mortgage Underwriters to
              work remotely
            </h3>
            <ul className={styles.solutionOneList}>
              <li className={styles.listItem}>Conventional, FHA, VA, USDA</li>
              <li className={styles.listItem}>Encompass experience a must</li>
              <li className={styles.listItem}>Competitive compensation</li>
            </ul>
            <button className={styles.btn}>Learn More</button>
          </div>
        </div>
        <div className={styles.solutionTwo}>
          <div className={styles.solutionTwoText}>
            <h3 className={styles.solutionHeader}>
              No Down Payment with a USDA Home Loan
            </h3>
            <p className={styles.solutionTwoDescription}>
              USDA home loans are designed specifically for low and moderate
              income Americans to better afford homes and has helped many
              individuals and families achieve the American Dream of
              homeownership.
            </p>
            <button className={styles.btn}>Learn More</button>
          </div>
          <img
            className={styles.solutionTwoImg}
            src={image2}
            alt="picture of keys"
          />
        </div>
      </div>
    </div>
  );
};
