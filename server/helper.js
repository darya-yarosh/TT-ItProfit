const {
    isValidName,
    isValidMail,
    isValidTel,
    isValidMessage
} = require("./validator.js");

function getInvalidFields(object) {
    const fields = {};

    if (isValidName(object.name) === false) {
        fields.name = "Incorrect name format";
    }
    if (isValidMail(object.mail) === false) {
        fields.mail = "Incorrect mail format";
    }
    if (isValidTel(object.tel) === false) {
        fields.tel = "Incorrect phone number";
    }
    if (isValidMessage(object.message) === false) {
        fields.message = "Incorrect message";
    }

    return fields;
}

function isInvalidFields(fields) {
    return fields.hasOwnProperty("name")
        || fields.hasOwnProperty("mail")
        || fields.hasOwnProperty("tel")
        || fields.hasOwnProperty("message")
}

module.exports = {
    getInvalidFields,
    isInvalidFields,
}