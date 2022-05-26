const { Router } = require("express");
const { addUser, login, listUsers } = require("./userControllers");
const { hashPass, unHash } = require("../middleware");
import { addComponent } = require("../componentCommands/comonentControllers")

const userRouter = Router();

userRouter.post("/login", unHash, login);
userRouter.post("/user", hashPass, addUser);
userRouter.post("/component", addComponent)

module.exports = userRouter;