const { Router } = require("express");
const { addGroup, listGroups, updateGroup, deleteGroup } = require("./groupController");

const groupRouter = Router();

groupRouter.post("/group", addGroup);
groupRouter.get("/group", listGroups);
groupRouter.put("/group", updateGroup);
groupRouter.delete("/group", deleteGroup);

module.exports = groupRouter;