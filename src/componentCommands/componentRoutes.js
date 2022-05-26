const { Router } = require("express");
const { addComponent } = require("./componentControllers");

const componentRouter = Router();

componentRouter.post("/component", addComponent);

module.exports = componentRouter;