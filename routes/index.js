var express = require('express');
var router = express.Router({
    mergeParams: true
});

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/1", function(req, res) {
  res.render("index1");
});

router.get("/the-women", function(req, res) {
  res.render("the-women");
});
router.get("/the-communities", function(req, res) {
  res.render("the-communities");
});
router.get("/the-communities/odanak", function(req, res) {
  res.render("communities/odanak");
});
router.get("/the-communities/Manawan", function(req, res) {
  res.render("the-communities/Manawan");

});
router.get("/the-communities/Cacouna", function(req, res) {
  res.render("the-communities/Cacouna");
});
module.exports = router;
