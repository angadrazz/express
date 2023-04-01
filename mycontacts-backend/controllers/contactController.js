const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../models/contactModel");
//@desc get all contact
//router get all contacts
//@access public

const getContacts = expressAsyncHandler(async(req, res) => {
  const contacts = await contactModel.find();
  res.status(200).json(contacts);
});

//@desc create all contact
//router post all contacts
//@access public
const createContact = expressAsyncHandler(async (req, res) => {
  console.log("This body request is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const contact = await contactModel.create({
    name,
    email,
    phone,
  });
  res.status(200).json(contact);
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
