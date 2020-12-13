const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter a first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter a last name"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    phone: {
      type: String,
      required: [true, "Please enter a phone number"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [5, "Password must be 5 characters or longer"],
    },
    dateOfBirth: {
      type: String,
      required: [true, "Please enter your date of birth"],
    },
    address: {
      street: {
        type: String,
        required: [true, "Please enter a street"],
      },
      city: {
        type: String,
        required: [true, "Please enter a city"],
      },
      state: {
        type: String,
        required: [true, "Please enter a state"],
      },
      zipCode: {
        type: String,
        required: [true, "Please enter a zipcode"],
      },
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

module.exports.User = mongoose.model("User", UserSchema);
