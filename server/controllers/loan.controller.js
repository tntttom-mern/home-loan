const { Loan } = require("../models/loan.model");

module.exports.getLoans = (req, res) => {
  Loan.find({})
    .then((loans) => res.json(loans))
    .catch((err) => res.json(err));
};

module.exports.getLoan = (req, res) => {
  Loan.find({ _id: req.params.id })
    .then((loans) => res.json(loans))
    .catch((err) => res.json(err));
};

module.exports.getLoanByUser = (req, res) => {
  Loan.find({
    userId: req.params.id,
  })
    .then((loans) => res.json(loans))
    .catch((err) => res.json(err));
};

module.exports.createLoan = (req, res) => {
  Loan.create(req.body)
    .then((loan) => res.json(loan))
    .catch((err) => res.json(err));
};
