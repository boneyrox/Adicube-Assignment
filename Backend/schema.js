const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const influencerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    number: Number,
    alternate:Number,
    youTubeLink : String,
    intergratedVideoPrice : Number,
    dedicatedPrice:Number,
    prerollPrice:Number,
    instagramLink: String,
    storyPrice: Number, 
    reelPrice: Number,
    postPrice: Number,
    referralCode:String,
})

const Influencer = mongoose.model('influencer', influencerSchema)


// const brandSchema = new mongoose.Schema({
//     Firstname: String,
//     Lastname: String,
//     Email: String,
//     Number: Number,
//     CompanyName: String,
//     CampaignBudget: Number, 
//     LaunchTiming: String,
//     LoginId: String,
//     password: String
// })

// brandSchema.pre('save', async function(next){
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password, 12);
//     }
//     next();
//     console.log("hehehe")
// })


// const Brand = mongoose.model('Brand', brandSchema)

module.exports = Influencer;