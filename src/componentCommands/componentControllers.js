const Component = require("./componentModel");

exports.addComponent = async(req, res) => {
    try {
        const newComponent = await Component.create(req.body);
        res.status(200).send( newComponent );
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message })
    }
}

exports.listComponents = async(req, res) => {
    try {
        // const listOfComponents = await Component.find({});
        // res.status(200).send( listOfComponents );

        if (!req.body.componentName || (req.body.componentName == "")) {
        const listOfComponents = await Component.find({});
        res.status(200).send( listOfComponents );
        } else if (req.body.componentName) {
            const listOfComponents = await Component.find({componentName: {$regex: req.body.componentName, $options: 'i'}});
            res.status(200).send( listOfComponents );
        }
         else {
            throw new Error("noooo");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message })
    }
}

exports.updateComponent = async(req, res) => {
    try {
        await Component.findOneAndUpdate({ _id: req.body._id }, req.body)
        const updatedComponentConfirmation = await Component.find({});
        res.status(200).send(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message })
    }
}
exports.deleteComponent = async(req, res) => {
    try {        
        // const findComponent = await Component.find({componentName: req.body.componentName})
        await Component.deleteOne({componentName: req.body.componentName});  
        const listOfComponents = await Component.find({});      
        res.status(200).send( listOfComponents )
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message })
    }
}