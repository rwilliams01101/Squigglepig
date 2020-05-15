const path = require("path");
const router = require("express").Router();
const promptsRoutes = require("./prompts");
const promptsAdjectiveRoutes = require("./adjectivePrompts");
const usersRoutes = require("./users");

// Book routes
router.use("/prompts", promptsRoutes);

router.use("/adjectives", promptsAdjectiveRoutes);


// Google Routes
router.use("/users", usersRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
