function isValidName(name) {
    if (name.trim().length === 0) {
        return false;
    }

    const NAME_REGEX = /[a-zA-Zа-яА-Я]{1,}/g;
    return NAME_REGEX.test(name);
}

function isValidMail(mail) {
    if (mail.trim().length === 0) {
        return false;
    }

    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return EMAIL_REGEX.test(mail);
}

function isValidTel(tel) {
    if (tel.trim().length === 0) {
        return false;
    }

    const TEL_REGEX = /^\+375\(([1-9]{2})\)[0-9]{7}$/g;
    return TEL_REGEX.test(tel.replaceAll(" ", ""));
}

function isValidMessage(message) {
    if (message.trim().length === 0) {
        return false;
    }

    const MESSAGE_REGEX = /[a-zA-Z0-9а-яА-Я]{1,}/g; 
    return MESSAGE_REGEX.test(message);
}

module.exports = {
    isValidName,
    isValidMail,
    isValidTel,
    isValidMessage
}