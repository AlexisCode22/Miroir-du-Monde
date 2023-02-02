const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const cardsControllers = require("./controllers/cardsControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.post("/users", hashPassword, userControllers.add);

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.use(verifyToken);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

router.get("/card", cardsControllers.browse);
router.get("/card/:id", cardsControllers.read);
router.put("/card/:id", cardsControllers.edit);
router.delete("/card/:id", cardsControllers.destroy);

module.exports = router;
