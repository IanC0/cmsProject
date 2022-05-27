const Group = require("./groupModel");

exports.addGroup = async (req, res) => {
    try {
        const newGroup = await Group.create(req.body);
        res.status(200).send({ groupName: newGroup.groupName });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.listGroups = async (req, res) => {
    try {
        const groups = await Group.find({});
        res.status(200).send({ groups });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.updateGroup = async (req, res) => {
    try {
        const updateResult = await Group.updateOne(req.body.filter, req.body.update)
        res.status(200).send({ modifiedCount: updateResult.modifiedCount });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}

exports.deleteGroup = async (req, res) => {
    try {
        const deleteResult = await Group.deleteOne(req.body)
        res.status(200).send({ deletedCount: deleteResult.deletedCount })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}