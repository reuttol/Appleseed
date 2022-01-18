const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/products");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  details: {
    description: {
      type: String,
      required: true,
      trim: true,
      //minlength: 10,
      validate(value) {
        if (value.length < 10)
          throw new Error(
            `description has to be at least 10 letters in length`
          );
      },
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      validate(value) {
        if (value < 0) throw new Error(`Price has to be a positive value`);
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      required: true,
      validate(value) {
        if (value.length < 2) {
          throw new Error("Must contain 2 images at least");
        }
      },
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    phone: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, ["he-IL"]))
          throw new Error("The phone number is not valid");
      },
    },
  },
});

const glu = new Product({
  name: "tube glu",
  category: "school suplies",
  details: {
    description: "glus shit togther",
    price: 3,
    images: ["img1", "img2"],
    phone: "0501118888",
  },
});

glu
  .save()
  .then(() =>console.log("glu was saved successfully"))
  .catch((error) =>console.log(error));

const ps5 = new Product({
  name: "ps5",
  category: "game consoles",
  isActive: true,
  details: {
    description: "new sony console",
    price: 2500,
    images: ["img1", "img2"],
    phone: "0501118888",
  },
});

ps5
  .save()
  .then(() => console.log("ps5 was saved successfully"))
  .catch((error) => console.log(error));
