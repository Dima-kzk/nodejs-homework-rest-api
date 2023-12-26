const express = require("express");
const {
  getAll,
  getById,
  addNew,
  deletebyId,
  updateById,
} = require("../../controllers/contacts");
const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", addNew);

router.delete("/:contactId", deletebyId);

router.put("/:contactId", updateById);

module.exports = router;
