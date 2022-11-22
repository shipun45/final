const mongoose = require("mongoose");
const ratingSchema = require("./rating");

const jioPlanSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  images: [
    {
      type: String,
      // required: true,
    },
  ],
  deal: {
    type: Number,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  ratings: [ratingSchema],
});

const jioPlans = mongoose.model("JioPlans", jioPlanSchema);
module.exports = { jioPlans, jioPlanSchema };
