const expressAsyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = expressAsyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

const loginUser = expressAsyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

const currentUser = expressAsyncHandler(async (req, res) => {
  res.json({ message: "current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
