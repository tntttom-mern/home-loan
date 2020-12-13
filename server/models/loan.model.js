const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  loanType: {
    type: String,
    required: [true, "Please select Home Purchase or Refinance"],
  },
  propertyUse: {
    type: String,
    required: [true, "Please select property use"],
  },
  homeDescription: {
    type: String,
    required: [true, "Please select home description"],
  },
  planToPurchase: {
    type: String,
  },
  firstTimeOwner: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports.Loan = mongoose.model("Loan", LoanSchema);
