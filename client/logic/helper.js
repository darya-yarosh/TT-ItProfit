import { STATE } from "../index";

import { LANGUAGES } from "../model/interface";

export function changeLanguage(languageId) {
    const isValidLanguage = LANGUAGES.find(language => language.id === languageId);
    if (isValidLanguage === undefined) {
        return;
    }

    STATE.currentLanguage = languageId;
    window.location.search = "?lang=" + STATE.currentLanguage.toLowerCase();
    checkLanguage();
}

export function checkLanguage() {
    const params = window.location.search;
    if (params === undefined || params.length === 0) {
        const lang = STATE.currentLanguage.toLowerCase();
        const urlWithLang = new URL(window.location.href + "?lang=" + lang)
        window.location.replace(urlWithLang);
    } else {
        const isLang = params.includes("lang");
        if (isLang) {
            const newLang = params.split('=')[1].toUpperCase();

            const isValidLang = LANGUAGES.map(language => language.id).includes(newLang);
            if (isValidLang) {
                STATE.currentLanguage = newLang;
            }
        }
    }
}

export function cleanFormFields(formFields) {
    const fieldList = Object.keys(formFields);

    fieldList.forEach(field => {
        formFields[field].value = "";
    })
}