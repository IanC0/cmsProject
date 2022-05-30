const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        unique: true,
        required: true,
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