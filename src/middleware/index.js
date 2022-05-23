const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../user/userModel");

exports.unHash = async (req, res, next) => {
    try {
        req.user = await User.findOne({ username: req.body.username });
        console.log(req.user);
        if (
            req.user && /**/ req.body.password == req.user.password
            // (await bcrypt.compare(req.body.password, req.user.password))
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