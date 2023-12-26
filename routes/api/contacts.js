const express = require("express");
const {
  getAll,
  getById,
  addNew,
  deletebyId,
  updateById,
  updateStatusContact,
} = require("../../controllers/contacts");
const router = express.Router();
const { validateBody, isValidId } = require("../../middlwares");
const { schemas } = require("../../models/contact");

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), addNew);

router.delete("/:contactId", isValidId, deletebyId);

router.put("/:contactId", isValidId, updateById);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
