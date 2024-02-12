import Form from "./components/Form/Form.js";
import MainFooter from "./components/MainFooter/MainFooter.js";
import MainHeader from "./components/MainHeader/MainHeader.js";
import { showFieldAlert } from "./components/FormField/FormField.js";

import { INTERFACE } from "./model/interface.js";

import { sendRequest } from "./logic/apiHelper.js";
import { checkLanguage, cleanFormFields } from "./logic/helper.js";

import "./index.scss";

export const STATE = {
    currentLanguage: "RU"
}

export function mainPage() {
    checkLanguage();

    const root = document.getElementById('root');

    const header = MainHeader(INTERFACE[STATE.currentLanguage].appTitle);

    const main = document.createElement("main");

    const article = document.createElement("article");
    const title = document.createElement("h1");
    title.textContent = INTERFACE[STATE.currentLanguage].articleTitle;
    const text = document.createElement("p");
    text.textContent = INTERFACE[STATE.currentLanguage].articleText;
    article.append(title, text);
    main.append(article);

    const formFields = [
        {
            id: "name",
            label: INTERFACE[STATE.currentLanguage].fieldList.name,
            type: "text",
            placeholder: INTERFACE[STATE.currentLanguage].fieldList.namePlaceholder,
        },
        {
            id: "mail",
            label: INTERFACE[STATE.currentLanguage].fieldList.mail,
            type: "mail",
            placeholder: INTERFACE[STATE.currentLanguage].fieldList.mailPlaceholder,
        },
        {
            id: "tel",
            label: INTERFACE[STATE.currentLanguage].fieldList.tel,
            type: "tel",
            placeholder: INTERFACE[STATE.currentLanguage].fieldList.telPlaceholder
        },
        {
            id: "message",
            label: INTERFACE[STATE.currentLanguage].fieldList.message,
            type: "textarea",
            placeholder: INTERFACE[STATE.currentLanguage].fieldList.messagePlaceholder,
        },
    ]

    async function formSubmit(event) {
        event.preventDefault();

        const formFields = {
            name: document.getElementById("input-name"),
            mail: document.getElementById("input-mail"),
            tel: document.getElementById("input-tel"),
            message: document.getElementById("input-message"),
        }

        const formData = {
            name: formFields.name.value.trim(),
            mail: formFields.mail.value.trim(),
            tel: formFields.tel.value.trim(),
            message: formFields.message.value.trim(),
        }

        const result = await sendRequest(formData)

        if (result.status === "success") {
            cleanFormFields(formFields);
            setTimeout(() => alert(result.msg), 100);
        } else if (result.status === "error") {
            const fieldList = Object.keys(result.fields);
            fieldList.forEach(fieldName => {
                showFieldAlert(
                    fieldName,
                    INTERFACE[STATE.currentLanguage].alertList[fieldName]
                );
            })
        }
    }

    const form = Form(
        INTERFACE[STATE.currentLanguage].formTitle,
        INTERFACE[STATE.currentLanguage].formDesc,
        formFields,
        formSubmit
    )
    main.append(form);

    const footer = MainFooter();
    root.append(header, main, footer);
}

mainPage();

document.title = INTERFACE[STATE.currentLanguage].appTitle;
document.documentElement.lang = STATE.currentLanguage.toLowerCase();