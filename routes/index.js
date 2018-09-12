var express = require('express');
var router = express.Router({
    mergeParams: true
});


/* GET home page. */
router.get("/", function(req, res) {
  res.render("home");
});
router.get("/home", function(req, res) {
  res.render("home");
});

/* ART */
router.get("/art", function (req, res) {
res.render ("art/art");
});
router.get("/art/art", function (req, res) {
res.render ("art/art");
});
router.get("/art/sounds", function (req, res) {
res.render ("art/sounds");
});
router.get("/art/circle", function (req, res) {
res.render ("art/circle");
});
router.get("/art/trad", function (req, res) {
res.render ("art/trad");
});
router.get("/art/dance", function (req, res) {
res.render ("art/dance");
});
router.get("/art/interview", function (req, res) {
res.render ("art/interview");
});
router.get("/art/photo", function (req, res) {
res.render ("art/photo");
});

/* LANGUAGE */
router.get("/language", function (req, res) {
res.render ("language/language");
});
router.get("/language/language", function (req, res) {
res.render ("language/language");
});
router.get("/language/sounds", function (req, res) {
res.render ("language/sounds");
});
router.get("/language/sons", function (req, res) {
res.render ("language/sons");
});
router.get("/language/circle", function (req, res) {
res.render ("language/circle");
});


router.get("/language/interview", function (req, res) {
res.render ("language/interview");
});
/*FR*/
router.get("/language/entrevue", function (req, res) {
res.render ("language/entrevue");
});


router.get("/language/trad", function (req, res) {
res.render ("language/trad");
});
router.get("/language/photo", function (req, res) {
res.render ("language/photo");
});
/* LAND */
router.get("/land", function (req, res) {
res.render ("land/land");
});
router.get("/land/land", function (req, res) {
res.render ("land/land");
});
router.get("/land/sounds", function (req, res) {
res.render ("land/sounds");
});
router.get("/land/circle", function (req, res) {
res.render ("land/circle");
});
router.get("/land/trad", function (req, res) {
res.render ("land/trad");
});
router.get("/land/interview", function (req, res) {
res.render ("land/interview");
});
router.get("/land/photo", function (req, res) {
res.render ("land/photo");
});
/* SPIRIT */
router.get("/spirit", function (req, res) {
res.render ("spirit/spirit");
});
router.get("/spirit/spirit", function (req, res) {
res.render ("spirit/spirit");
});
router.get("/spirit/sounds", function (req, res) {
res.render ("spirit/sounds");
});
router.get("/spirit/circle", function (req, res) {
res.render ("spirit/circle");
});
router.get("/spirit/trad", function (req, res) {
res.render ("spirit/trad");
});
router.get("/spirit/interview", function (req, res) {
res.render ("spirit/interview");
});
router.get("/spirit/photo", function (req, res) {
res.render ("spirit/photo");
});

/*THE WOMEN*/
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
router.get("/the-communities/Kiuna", function(req, res) {
  res.render("the-communities/Kiuna");
  });
  router.get("/about", function(req, res) {
    res.render("about/about");
  });
  router.get("/about/apropos", function(req, res) {
    res.render("about/apropos");
  });
  router.get("/ack", function(req, res) {
    res.render("about/ack");
  });
    router.get("/the-researcher", function(req, res) {
    res.render("the-research/the-researcher");
});
router.get("/the-research", function(req, res) {
res.render("the-research/the-research");
});
router.get("/partials", function(req, res) {
res.render("partials/footer");
});
module.exports = router;
