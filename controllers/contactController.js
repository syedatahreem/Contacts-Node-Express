const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const { fetchContactById } = require("./helpers");
//@desc Get all contacts
//@route Get /api/contacts
//@access private

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ userId: req.user.id });
  res.status(200).json(contacts);
});

//@desc Get a contact by ID
//@route Get /api/contacts/:id
//@access private

const getContactById = asyncHandler(async (req, res) => {
  const contact = await fetchContactById(req.params.id);
  res.status(200).json(contact);
});

//@desc Create a new contact
//@route POST /api/contacts
//@access private

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    userId: req.user.id,
  });
  if (contact.userId.toString() !== req.user.id) {
    res.status(403);
    throw new Error("Forbidden, you can only create your own contacts");
  }
  res.status(201).json(contact);
});

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access private

const updateContact = asyncHandler(async (req, res) => {
  const contact = await fetchContactById(req.params.id);
  const updatedContact = await Contact.findByIdAndUpdate(
    contact._id,
    req.body,
    { new: true },
  );

  if (contact.userId.toString() !== req.user.id) {
    res.status(403);
    throw new Error("Forbidden, you can only update your own contacts");
  }
  res.status(200).json(updatedContact);
});
//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await fetchContactById(req.params.id);
  if (contact.userId.toString() !== req.user.id) {
    res.status(403);
    throw new Error("Forbidden, you can only update your own contacts");
  }
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
