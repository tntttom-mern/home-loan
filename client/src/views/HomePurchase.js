import React, { useState } from "react";
import HomeBanner from "../components/HomeBanner";
import HomeForm from "../components/HomeForm";
import UserForm from "../components/UserForm";
import { navigate } from "@reach/router";
import axios from "axios";

export default () => {
  const [propertyUse, setPropertyUse] = useState("");
  const [homeDescription, setHomeDescription] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [firstTimeOwner, setFirstTimeOwner] = useState("");

  const submitHomePurchase = (userId) => {
    axios
      .post("http://localhost:8000/api/loans/new", {
        loanType: "Home Purchase",
        propertyUse,
        homeDescription,
        planToPurchase: timeframe,
        firstTimeOwner,
        userId,
      })
      .then((res) => {
        console.log(res);
        navigate(`/user/${res.data.userId}/loans/${res.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  console.log(propertyUse);
  return (
    <div>
      <HomeBanner />
      <HomeForm
        setPropertyUse={setPropertyUse}
        setHomeDescription={setHomeDescription}
        setTimeframe={setTimeframe}
        setFirstTimeOwner={setFirstTimeOwner}
      />
      <UserForm submitLoan={submitHomePurchase} />
    </div>
  );
};
