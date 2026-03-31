async function fetchContactById(id) {
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  return contact;
}

module.exports = {
  fetchContactById,
};
