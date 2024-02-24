const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
title:{
    type:String,
    // required:true
    
},
description:String,
image:{
    type:String,
    default:"https:media.istockphoto.com/id/578081768/photo/singapore-skyline.jpg?s=2048x2048&w=is&k=20&c=ymCKt4uH20dxQ3TnMlrH7MLPVhLbTKvEbdnqsJsLr8E=",
    set: (v) => 
    v === "" 
    ? "https://media.istockphoto.com/id/578081768/photo/singapore-skyline.jpg?s=2048x2048&w=is&k=20&c=ymCKt4uH20dxQ3TnMlrH7MLPVhLbTKvEbdnqsJsLr8E=":v,
   
},
price:String,
location:String,
country:String,

});
const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;