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
  res.render("the-women/the-women");
});
router.get("/the-women/Marie-Christine-Petiquay", function(req, res) {
  res.render("the-women/Marie-Christine-Petiquay");
});
router.get("/the-women/Raphaelle-Obomsawin", function(req, res) {
  res.render("the-women/Raphaelle-Obomsawin");
});
router.get("/the-women/Catherine-Boivin", function(req, res) {
  res.render("the-women/Catherine-Boivin");
});
router.get("/the-women/Jessica-Ann-Watso", function(req, res) {
  res.render("the-women/Jessica-Ann-Watso");
});
router.get("/the-women/Lisa-Aubin-Berube", function(req, res) {
  res.render("the-women/Lisa-Aubin-Berube");
});
router.get("/the-women/Ivanie-Aubin-Malo", function(req, res) {
  res.render("the-women/Ivanie-Aubin-Malo");
});
router.get("/the-communities", function(req, res) {
  res.render("the-communities/the-communities");
});

router.get("/the-communities/odanak", function(req, res) {
  res.render("the-communities/Odanak");
});
router.get("/the-communities/Manawan", function(req, res) {
  res.render("the-communities/Manawan");

});
router.get("/the-communities/Cacouna", function(req, res) {
  res.render("the-communities/Cacouna");
});

router.get("/Odanak/Kiuna", function(req, res) {
  res.render("Odanak/Kiuna");
  });
    router.get("/the-research", function(req, res) {
    res.render("the-research/the-research");

});
module.exports = router;
