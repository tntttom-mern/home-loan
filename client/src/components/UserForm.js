import React, { useState } from "react";

import axios from "axios";

import styles from "../css-modules/UserForm.module.css";

export default (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    axios.post("/localhost:8000/api/register", {
      firstName,
      lastName,
      email,
      password,
      phone,
      dateOfBirth: birthdate,
      address: {
        street,
        city,
        state,
        zipcode,
      },
    });
  };

  return (
    <form className={styles.formContainer} onSubmit={submitForm}>
      <h1 className={styles.formHeader}>User Profile</h1>
      <div className={styles.inputList}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>First Name</label>
          <input
            className={styles.inputBox}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Last Name</label>
          <input
            className={styles.inputBox}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Email Address</label>
          <input
            className={styles.inputBox}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Password</label>
          <input
            className={styles.inputBox}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Primary Phone</label>
          <input
            className={styles.inputBox}
            type="text"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Date of Birth</label>
          <input
            className={styles.inputBox}
            type="text"
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Street Address</label>
          <input
            className={styles.inputBox}
            type="text"
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>City</label>
          <input
            className={styles.inputBox}
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>State</label>
          <input
            className={styles.inputBox}
            type="text"
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Zip Code</label>
          <input
            className={styles.inputBox}
            type="text"
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.checkContainer}>
        <input type="checkbox" />
        <label className={styles.checkText}>
          By clicking the Send button, I agree to the Legal Terms of Website
          Use, Email Policy Terms and Conditions and Privacy Policy. In
          addition, I expressly consent to having Platinum Home Mortgage and its
          affiliates contact me about my inquiry using text message or phone
          (this would include automatic telephone dialing systems and
          pre-recorded voice messaging) to the telephone numbers I have
          provided, even if that telephone number is on a corporate, state or
          national Do Not Call Registry. Agreeing to receive such calls or
          messages is not a condition of getting services from us or our
          affiliates.
        </label>
      </div>

      <input className={styles.btn} type="submit" />
    </form>
  );
};
