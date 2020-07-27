const router = require("express").Router();

router.get("/transaction", function (req, res) {
    res.redirect("/");
});


module.exports = router;