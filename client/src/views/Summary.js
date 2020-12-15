import React, { useEffect, useState } from "react";
import axios from "axios";

import SummaryList from "../components/SummaryList";

export default (props) => {
  const [user, setUser] = useState({});
  const [loan, setLoan] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await axios.get(
        `http://localhost:8000/api/users/${props.userId}`
      );

      const loanData = await axios.get(
        `http://localhost:8000/api/loans/${props.loanId}`
      );

      console.log(userData);
      console.log(loanData);
      setUser(userData.data[0]);
      setLoan(loanData.data[0]);
      setLoaded(true);
    };

    fetchData();
  }, []);

  return <div>{loaded && <SummaryList user={user} loan={loan} />}</div>;
};
