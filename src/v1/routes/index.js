const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.send(`Hello from baseURL: ${req.baseUrl}`);
});

module.exports = router;