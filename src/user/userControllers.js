const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send({ username: newUser.username });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        res.status(200).send({ username: user.username });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}