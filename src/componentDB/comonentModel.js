const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
    bannerName: {
        type: String,
        reqired: true,
        unique: true,
    },
    bannerType: {
        type: String,
        enum: ['info', 'warning']
    },
    bannerText: {
        type: String
    }
})

const buttonSchema = new mongoose.Schema({
    buttonName: {
        type: String,
        reqired: true,
        unique: true,
    },
    buttonType: {
        type: String,
        enum: ['apply', 'info']
    },
    buttonUrl: {
        type: String
    },
    buttonSize: {
        type: String,
        enum: ['small', 'medium', 'large']
    }
})

const mediaSchema = new mongoose.Schema({
    mediaName: {
        type: String,
        reqired: true,
        unique: true,
    },
    mediaType: {
        type: String,
        enum: ['image', 'video']
    },
    mediaSource: {
        type: String
    },
    mediaAlt: {
        type: String
    },
    mediaSize: {
        type: String,
        enum: ['small', 'medium', 'large']
    }
})

const newFormSchema = new mongoose.Schema({
    formName: {
        type: String,
        reqired: true,
        unique: true,
    },
    formList: {
        type: Array
    }
})

const textBoxSchema = new mongoose.Schema({
    textBoxName: {
        type: String,
        reqired: true,
        unique: true,
    },
    htmlContent: {
        type: String
    }
})