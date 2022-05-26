const Component = require("./componentModel");

exports.addComponent = async(req, res) => {
    try {
        const newComponent = await Component.create(req.body);
        res.status(200).send( `${newComponent.componentName} added `)
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message })
    }
}