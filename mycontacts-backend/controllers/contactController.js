const expressAsyncHandler = require("express-async-handler");
//@desc get all contact
//router get all contacts
//@access public

const getContacts = expressAsyncHandler((req, res) => {
  res.status(200).json({ message: "See your all contact" });
});

//@desc post all contact
//router post all contacts
//@access public
const createContact = expressAsyncHandler((req, res) => {
  console.log("This body request is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  res.status(200).json({ message: "Create contact" });
});

//@desc get all contact
//router get all contacts
//@access public

const getContact = expressAsyncHandler((req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});

//@desc update all contact
//router post all contacts
//@access public
const updateContact = expressAsyncHandler((req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc delete all contact
//router post all contacts
//@access public
const deleteContact = expressAsyncHandler((req, res) => {
  res.status(201).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
