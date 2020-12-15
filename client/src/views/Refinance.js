import React from "react";

import RefinanceBanner from "../components/RefinanceBanner";
import RefinanceForm from "../components/RefinanceForm";
import UserForm from "../components/UserForm";

export default () => {
  return (
    <div>
      <RefinanceBanner />
      <RefinanceForm />
      <UserForm />
    </div>
  );
};
