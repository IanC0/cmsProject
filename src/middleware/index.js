const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../user/userModel");

exports.hashPass = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

exports.unHash = async (req, res, next) => {
    try {
        req.user = await User.findOne({ username: req.body.username });
        if (
            req.user &&
            (await bcrypt.compare(req.body.password, req.user.password))
        ) {
            next();
        } else {
            throw new Error("Incorrect Credentials");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
}