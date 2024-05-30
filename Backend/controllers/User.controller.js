const { registerValidation, loginValidation } = require("../utils/validation");
const bcrypt = require("bcryptjs");
const User = require("../models/authModel");
const jwt = require("jsonwebtoken");

const SignUpController = async (req, res) => {
  try {
    // Validate the data before we make a user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists");

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    try {
      await user.save();
      res.send({ user: user._id });
      res.status(400).json({ message: "Accout Created successfully" });
    } catch (err) {
      res.status(400).send(err);
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const LoginController = async (req, res) => {
  // Validate the data before we make a user
  try {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email is not found");

    // Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");

    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
    return res.status(200).send({ message: "Login successfully " });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
const LogOutController = async (req, res) => {
  try {
    res.header("auth-token", "").send({ success: true });
    res.status(200).send({ message: "logout successfully ", success: true });
  } catch (err) {
    res.status(400).send({ message: err.message, success: false });
  }
};
module.exports = { LoginController, SignUpController, LogOutController };
