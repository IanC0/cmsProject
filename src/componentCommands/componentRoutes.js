const { Router } = require("express");
const { addComponent, listComponents, deleteComponent, updateComponent, getComponentsByGroup } = require("./componentControllers");

const componentRouter = Router();

componentRouter.post("/component", addComponent);
componentRouter.post("/list", listComponents);
componentRouter.post("/groupid", getComponentsByGroup);
componentRouter.get("/component", listComponents);
componentRouter.put("/component", updateComponent);
componentRouter.delete("/component", deleteComponent);
module.exports = componentRouter;