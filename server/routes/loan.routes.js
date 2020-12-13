const LoanController = require("../controllers/loan.controller");

module.exports = function (app) {
  app.get("/api/loans", LoanController.getLoans);
  app.get("/api/loans/:id", LoanController.getLoan);
  app.get("/api/user/:id/loans", LoanController.getLoanByUser);
  app.post("/api/loans/new", LoanController.createLoan);
};
