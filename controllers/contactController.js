//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: "Get contacts" });
};

//@desc Get a contact by ID
//@route Get /api/contacts/:id
//@access public

const getContactById = (req, res) => {
  res.status(200).json({ message: `Get contact by ID: ${req.params.id}` });
};

//@desc Create a new contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  res.status(201).json({ message: "Contact created successfully" });
};

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: "Contact updated successfully" });
};
//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: "Contact deleted successfully" });
};

module.exports = {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
