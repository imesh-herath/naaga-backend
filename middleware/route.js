const express = require("express")
const router = express.Router()
const SnakeController = require("./controller")

router.post("/", SnakeController.createSnake);
router.post("/find", SnakeController.getSnakeFromSpec);
router.get("/", SnakeController.getSnakes);
router.get("/:id", SnakeController.getSnakesById);

module.exports = router;