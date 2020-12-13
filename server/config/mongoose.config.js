const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/LoanDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("LoanDB was connected"))
  .catch((err) => console.log("There was an error", err));
