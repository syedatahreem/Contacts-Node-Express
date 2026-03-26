const express = require("express");
const router = express.Router();
const {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);

router
  .route("/:id")
  .put(updateContact)
  .get(getContactById)
  .delete(deleteContact);

module.exports = router;
