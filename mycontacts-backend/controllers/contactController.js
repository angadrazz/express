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

const getContact = expressAsyncHandler(async(req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

//@desc update all contact
//router post all contacts
//@access public
const updateContact = expressAsyncHandler(async(req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  const updatedContact = await contactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  );
  res.status(200).json(updatedContact);

});

//@desc delete all contact
//router post all contacts
//@access public
const deleteContact = expressAsyncHandler(async(req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  await contact.remove();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
