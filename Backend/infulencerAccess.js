const router = require("express").Router();
const User = require("./influencer");
router.post("/register", async (req, res) => {
  try {
    const newInfluencer = new Influencer({
      Firstname: req.body.username,
      Lastname: req.body.Lastname,
      Email: req.body.Email,
      Number: req.body.Number,
      Alternate: req.body.Alternate,
      YouTubeLink: req.body.YouTubeLink,
      IntergratedVideoPrice: req.body.IntergratedVideoPrice,
      DedicatedPrice: req.body.DedicatedPrice,
      PrerollPrice: req.body.PrerollPrice,
      InstagramLink: req.body.InstagramLink,
      StoryPrice: req.body.StoryPrice,
      ReelPrice: req.body.ReelPrice,
      PostPrice: req.body.PostPrice,
      ReferralCode: req.body.ReferralCode,
    });

    const influencer = await newInfluencer.save();
    res.status(200).json(influencer);
  } catch (err) {
    res.status(500).json(err);
  }
});
