
const mongoose = require("mongoose");
const BootcampSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Please provide a name"],
      unique: true,
      trim: true,
      maxLength: [50, "Name can not exceed 50 characters"],
   },
   slug: String,
   description: {
      type: String,
      required: [true, "Please provide a Description"],
      maxLength: [1000, "Description can not exceed 1000 characters"],
   },
   website: {
      type: String,
      match: [
         /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
         "Please use a valid URL with HTTP or HTTPS",
      ],
   },
   phone: {
      type: String,
      maxLength: [20, "Phone can not exceed 20 characters"],
   },
   email: {
      type: String,
      required: [true, "Please add an address"],
      match: [
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
         "Please add a valid email",
      ],
   },
   location: {
      type: {
         type: String,
         enum: ["Point"],
      },
      coordinates: {
         type: [Number],
         index: "2dsphere",
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
   },
   careers: {
      type: [String],
      required: true,
      enum: [
         "Web Development",
         "Mobile Development",
         "UI/UX",
         "Data Science",
         "Business",
         "Other",
      ],
   },
   averageRating: {
      type: Number,
      min: [1, "Rating must be atleast 1"],
      max: [10, "Rating must can not be greater than 10"],
   },
   averageCost: Number,
   photo: {
      type: String,
      default: "no-photo.jpg",
   },
   housing: {
      type: Boolean,
      default: false,
   },
   jobAssistance: {
      type: Boolean,
      default: false,
   },
   jobGuarantee: {
      type: Boolean,
      default: false,
   },
   acceptGi: {
      type: Boolean,
      default: false,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

module.exports =  mongoose.model("Bootcamp", BootcampSchema);
