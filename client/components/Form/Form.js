import { STATE } from "../../index";

import Button from "../Button/Button";
import FormField from "../FormField/FormField";

import { INTERFACE } from '../../model/interface';

import "./Form.scss";

export default function Form(legendValue, legendTitle, fieldList, onSubmit) {
    const form = document.createElement("form");
    form.onsubmit = onSubmit;

    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = legendValue;
    legend.title = legendTitle;

    fieldset.append(legend);
    fieldList.forEach(field => {
        const formField = FormField(field);
        fieldset.append(formField);
    })
    form.append(fieldset);

    const button = Button(
        `button-form`,
        'submit',
        INTERFACE[STATE.currentLanguage].buttonSubmit,
        INTERFACE[STATE.currentLanguage].buttonSubmitDesc,
        () => { }
    )
    form.append(button);

    return form;
}