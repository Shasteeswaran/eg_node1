const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const data = new Schema({
    username: {
        type: 'string',
        unique: true,
        required: true
    },
    email: {
        type: 'string',
        unique: true,
        required: true
    },
    password: {
        type: 'string',
        minlength: 8,
        required: true
    }
}, {timestamps: true});

const ldata = mongoose.model("harish_users", data);
module.exports = ldata;