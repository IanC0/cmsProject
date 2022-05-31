const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
    component: {
        type: String,
        enum: ['Text', 'Form', 'Media', 'Button', 'Banner', 'Header', 'form field - email', 'form field - date', 'form field - drop down', 'form field - number', 'form field - telephone', 'form field - button'],
        required: true
    },
    assignedToGroup: {
        type: String,
    },
    componentName: {
        type: String,
        unique: true,
        required: true
    },
    type: {
        type: String,
        enum: ['Form','Media','Button','Header', 'formFieldEmail', 'formFieldDate','formFieldNumber','formFieldTelephoneNumber','formFieldButton']
    },
    option: {
        type: String,
    },
    text: {
        type: String
    },
    formFields: [{
        fieldName: String,
        fieldType: String
    }],
    label: {
        type: String
    },
    src: {
        type: String
    },
    size: {
        type: String
    },
    components: [
        {
            id: Number,
        }
    ],
    dateModified: {
        type: Date,
    }
})

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;

// const bannerSchema = new mongoose.Schema({
//     bannerName: {
//         type: String,
//         reqired: true,
//         unique: true,
//     },
//     bannerType: {
//         type: String,
//         enum: ['info', 'warning']
//     },
//     bannerText: {
//         type: String
//     }
// })

// const buttonSchema = new mongoose.Schema({
//     buttonName: {
//         type: String,
//         reqired: true,
//         unique: true,
//     },
//     buttonType: {
//         type: String,
//         enum: ['apply', 'info']
//     },
//     buttonUrl: {
//         type: String
//     },
//     buttonSize: {
//         type: String,
//         enum: ['small', 'medium', 'large']
//     }
// })

// const mediaSchema = new mongoose.Schema({
//     mediaName: {
//         type: String,
//         reqired: true,
//         unique: true,
//     },
//     mediaType: {
//         type: String,
//         enum: ['image', 'video']
//     },
//     mediaSource: {
//         type: String
//     },
//     mediaAlt: {
//         type: String
//     },
//     mediaSize: {
//         type: String,
//         enum: ['small', 'medium', 'large']
//     }
// })

// const newFormSchema = new mongoose.Schema({
//     formName: {
//         type: String,
//         reqired: true,
//         unique: true,
//     },
//     formList: {
//         type: Array
//     }
// })

// const textBoxSchema = new mongoose.Schema({
//     textBoxName: {
//         type: String,
//         reqired: true,
//         unique: true,
//     },
//     htmlContent: {
//         type: String
//     }
// })