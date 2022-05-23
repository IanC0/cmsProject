const { Router } = require("express");
const { addUser, login, listUsers } = require("./userControllers");
const { unHash } = require("../middleware");

const userRouter = Router();

// use http verb post to add data to our movie endpoint
userRouter.post("/login", unHash, login);

userRouter.post("/user", addUser); /*checkEmailValid, hashPass,*/ 
userRouter.get("/user", listUsers);
// userRouter.put("/user", checkEmailValidUpdate, updateUser);
// userRouter.delete("/user", deleteUser);

module.exports = userRouter;