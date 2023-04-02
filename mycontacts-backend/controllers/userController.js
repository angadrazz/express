const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { json } = require("express");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = expressAsyncHandler(async (req, res) => {
        const {username, email, password} = req.body;
        if(!username || !email || !password) {
                res.status(400);
                throw new Error("All fields are mandatory!");
        }
  const userAvailable = await User.findOne({email});
  if(userAvailable){
        res.status(400);
        throw new Error("User already registered!");
        
  }
  //Hashed Password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
        username,
        email,
        password: hashedPassword,
  });
  console.log(`User Created ${user} Successfully Completed`);
  if(user){
        res.status(201).json({_id: user.id, email: user.email});
  }else {
        res.status(400);
        throw new Error("User data is not valid");
  }
  res.json({ message: "Register the user" });
});

//@desc login a user
//@route POST /api/users/register
//@access public

const loginUser = expressAsyncHandler(async (req, res) => {
        const {email, password} = req.body;
        if(!email || !password) {
                res.status(400);
                throw new Error("All fields are mandatory!");
        }
        const user = await User.findOne({email});
        //compared password with hashed password
        if(user && (await bcrypt.compare(password, user.password))){
                const accessToken = jwt.sign({
                        user: {
                                username: user.username,
                                email: user.email,
                                id: user.id,
                        },
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "1m" }
                );
                res.status(200).json({ accessToken });
        }
        else{
                res.status(401)
                throw new Error("Email and Password is Not valid");
        }
  res.json({ message: "login user" });
});

//@desc current a user
//@route POST /api/users/register
//@access private

const currentUser = expressAsyncHandler(async (req, res) => {
  res.json({ message: "current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
