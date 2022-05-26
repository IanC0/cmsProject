const { Router } = require("express");
const { addUser, login, listUsers } = require("./userControllers");
const { hashPass, unHash } = require("../middleware");

const userRouter = Router();

userRouter.post("/login", unHash, login);
userRouter.post("/user", hashPass, addUser);

module.exports = userRouter;