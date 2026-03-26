const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get contacts" }); 
});

//@desc Get a contact by ID
//@route Get /api/contacts/:id
//@access public

const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact by ID: ${req.params.id}` });
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
  console.log(req.body);
  res.status(201).json({ message: "Contact created successfully" });
});

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Contact updated successfully" });
});
//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Contact deleted successfully" });
});

module.exports = {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
