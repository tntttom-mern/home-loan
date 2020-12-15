import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

import RefinanceBanner from "../components/RefinanceBanner";
import RefinanceForm from "../components/RefinanceForm";
import UserForm from "../components/UserForm";

import styles from "../css-modules/Refinance.module.css";

export default () => {
  const [propertyUse, setPropertyUse] = useState("");
  const [homeDescription, setHomeDescription] = useState("");

  const submitRefinance = (userId) => {
    axios
      .post("http://localhost:8000/api/loans/new", {
        loanType: "Refinance",
        propertyUse,
        homeDescription,
        userId,
      })
      .then((res) => {
        console.log(res);
        navigate(`/user/${res.data.userId}/loans/${res.data._id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.container}>
      <RefinanceBanner />
      <div className={styles.forms}>
        <RefinanceForm
          setPropertyUse={setPropertyUse}
          setHomeDescription={setHomeDescription}
        />
        <UserForm submitLoan={submitRefinance} />
      </div>
    </div>
  );
};
