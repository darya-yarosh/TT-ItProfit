const { SERVER_INTERFACE } = require("./interface.js");

const {
    isValidName,
    isValidMail,
    isValidTel,
    isValidMessage
} = require("./validator.js");

function getInvalidFields(lang, object) {
    const fields = {};

    if (isValidName(object.name) === false) {
        fields.name = SERVER_INTERFACE[lang].feedback.name;
    }
    if (isValidMail(object.mail) === false) {
        fields.mail = SERVER_INTERFACE[lang].feedback.mail;
    }
    if (isValidTel(object.tel) === false) {
        fields.tel = SERVER_INTERFACE[lang].feedback.tel;
    }
    if (isValidMessage(object.message) === false) {
        fields.message = SERVER_INTERFACE[lang].feedback.message;
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