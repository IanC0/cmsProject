const { Router } = require("express");
const { addComponent, listComponents, deleteComponent, updateComponent } = require("./componentControllers");

const componentRouter = Router();

componentRouter.post("/component", addComponent);
componentRouter.get("/component", listComponents);
componentRouter.put("/component", updateComponent);
componentRouter.delete("/component", deleteComponent);
module.exports = componentRouter;