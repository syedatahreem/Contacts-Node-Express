const express = require("express");
const validateToken = require("../middleware/validateToken");
const router = express.Router();
const {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.use(validateToken);
router.route("/").get(getContact).post(createContact);

router
  .route("/:id")
  .put(updateContact)
  .get(getContactById)
  .delete(deleteContact);

module.exports = router;
