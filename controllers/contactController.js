const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const { fetchContactById } = require("./helpers");
//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Get a contact by ID
//@route Get /api/contacts/:id
//@access public

const getContactById = asyncHandler(async (req, res) => {
  const contact = await fetchContactById(req.params.id);
  res.status(200).json(contact);
});

//@desc Create a new contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
});

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await fetchContactById(req.params.id);
  const updatedContact = await Contact.findByIdAndUpdate(
    contact._id,
    req.body,
    { new: true },
  );
  res.status(200).json(updatedContact);
});
//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await fetchContactById(req.params.id);
  await Contact.findByIdAndDelete(contact._id);
  res.status(200).json({ message: "Contact deleted successfully" });
});

module.exports = {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
