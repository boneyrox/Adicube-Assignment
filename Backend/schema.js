const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const influencerSchema = new mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Number: Number,
    Alternate:Number,
    YouTubeLink : [{String}],
    IntergratedVideoPrice : Number,
    DedicatedPrice:Number,
    PrerollPrice:Number,
    InstagramLink: String,
    StoryPrice: Number, 
    ReelPrice: Number,
    PostPrice: Number,
    ReferralCode:String,
})

const Influencer = mongoose.model('influencer', influencerSchema)


const brandSchema = new mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Number: Number,
    CompanyName: String,
    CampaignBudget: Number, 
    LaunchTiming: String,
    LoginId: String,
    password: String
})

brandSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
    console.log("hehehe")
})


const Brand = mongoose.model('Brand', brandSchema)

module.exports = {Brand, Influencer};