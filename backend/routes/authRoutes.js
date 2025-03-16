const express = require("express");
const passport = require("../config/googleAuth");
const router = express.Router();

//auth route
router.get("/google", 
    passport.authenticate("google", 
        {scope: ["profile", "email"]}
    )
);

//autj callback
router.get("/google/callback",
    passport.authenticate("google", { failureRedirect: "http://localhost:3000/login" }),
    (req, res) => {
      res.redirect("http://localhost:3000/dashboard");
    }
  );

//admin logout
router.get("/logout", (req, res) => {
    req.logout(() => {
      res.redirect("http://localhost:3000/login");
    });
  });
  
  module.exports = router;