import { STATE } from "../index";

import { LANGUAGES } from "../model/interface";

export function changeLanguage(languageId) {
    const isValidLanguage = LANGUAGES.find(language => language.id === languageId);
    if (isValidLanguage === undefined) {
        return;
    }

    STATE.currentLanguage = languageId;
    window.localStorage.setItem("Lang", STATE.currentLanguage)
    window.location.reload();
}

export function checkLanguage() {
    const currentLang = window.localStorage.getItem("Lang");

    if (currentLang === null) {
        window.localStorage.setItem("Lang", STATE.currentLanguage);
    } else {
        STATE.currentLanguage = currentLang;
    }
}

export function cleanFormFields(formFields) {
    const fieldList = Object.keys(formFields);

    fieldList.forEach(field => {
        formFields[field].value = "";
    })
}