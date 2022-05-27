const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true,
        unique: true,
    },
    components: [
        {
            componentId: String,
        }
    ],
    dateModified: {
        type: Date,
        required: true,
    }
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;