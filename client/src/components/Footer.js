import React from "react";

import socialIcon from "../images/socialIcons.png";
import lenderLogo from "../images/lenderLogo.png";

import styles from "../css-modules/Footer.module.css";

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <img
          className={styles.socialImgs}
          src={socialIcon}
          alt="photo of social icons"
        />
        <hr />
        <p>
          © 2020 Platinum Home Mortgage Corporation. All rights reserved. Legal
          | Licensing | Privacy
        </p>
        <p> In New York: dba PHMC Mortgage</p>
        <p>
          NMLS ID #13589. For licensing information, go to:
          www.nmlsconsumeraccess.org
        </p>
        <p>
          All loans subject to credit approval and certain restrictions may
          apply. Information subject to change without notice.
        </p>
        <p>HomeStyle® is a registered trademark of Fannie Mae.</p>

        <img
          className={styles.logos}
          src={lenderLogo}
          alt="image of lender logo"
        />
      </div>
    </div>
  );
};
