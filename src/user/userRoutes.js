const { Router } = require("express");
const { addUser, listUsers } = require("./userControllers");
// const { checkEmailValid, checkEmailValidUpdate, hashPass, comparePass } = require("../middleware");

const userRouter = Router();

// use http verb post to add data to our movie endpoint
// userRouter.post("/login", getUser, comparePass); /* Should this be post? */

userRouter.post("/user", addUser); /*checkEmailValid, hashPass,*/ 
userRouter.get("/user", listUsers);
// userRouter.put("/user", checkEmailValidUpdate, updateUser);
// userRouter.delete("/user", deleteUser);

module.exports = userRouter;