const express = require("express");
const router = express.Router();

require("./connection");

const Influencer = require("./schema");

router.post('/register', (req, res) => {
  console.log(req.body);
  console.log("Heeloo");

  const newInfluencer = new Influencer({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    number: req.body.number,
    alternate: req.body.alternate,
    youTubeLink: req.body.youTubeLink,
    intergratedVideoPrice: req.body.intergratedVideoPrice,
    dedicatedPrice: req.body.dedicatedPrice,
    prerollPrice: req.body.prerollPrice,
    instagramLink: req.body.instagramLink,
    storyPrice: req.body.storyPrice,
    reelPrice: req.body.reelPrice,
    postPrice: req.body.postPrice,
    referral: req.body.referral,
  });

  newInfluencer.save().then(() => {
      res.status(201).json({ message: "User registered" });
    })
    .catch(() => {
      res.status(500).send("User not registered");
    });
});

module.exports = router;
