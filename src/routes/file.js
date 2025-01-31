const express = require('express')
const path = require("path");

const file = (app) => {
  const router = express.Router();
  app.use("/receipts", router)
  router.get('/', (req, res) => {
    let file = path.join(__dirname, "../assets/receipt.pdf");
    res.sendFile(file);
  })
}

module.exports = file; 