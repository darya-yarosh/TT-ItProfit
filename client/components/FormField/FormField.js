import Inputmask from "inputmask";

import Input from "../Input/Input";
import Label from "../Label/Label";
import Textarea from "../Textarea/Textarea";

import "./FormField.scss";

export default function FormField(field) {
    const wrapper = document.createElement("div");
    wrapper.className = "formField";

    const inputId = `input-${field.id}`;
    const label = Label(
        `label-${field.id}`,
        inputId,
        `${field.label}:`
    )
    wrapper.append(label);

    const input = getInputByType(field);
    input.onclick = () => {
        removeInputAlertStatus(inputId);
        switchAlertToBr(inputId);
    };
    wrapper.append(input)

    const brForAlert = document.createElement("br");
    wrapper.append(brForAlert);

    return wrapper;
}

function getInputByType(field) {
    switch (field.type) {
        case "textarea": {
            const textarea = Textarea(
                `input-${field.id}`,
                field.placeholder,
                true,
            );

            return textarea;
        };
        case "tel": {
            const tel = Input(
                `input-${field.id}`,
                field.type,
                field.placeholder,
                true
            )

            new Inputmask({ mask: "+375 (99) 999 99 99" }).mask(tel);
            return tel;
        }
        default: {
            const input = Input(
                `input-${field.id}`,
                field.type,
                field.placeholder,
                true
            );

            return input;
        }
    }
}

function switchAlertToBr(inputId) {
    const input = document.getElementById(inputId);

    if (input.nextSibling === null) {
        return;
    }

    if (input.nextSibling.className === "alert") {
        const br = document.createElement("br");
        input.nextSibling.replaceWith(br);
    }
}

function switchBrToAlert(input, alertMessage) {
    const alert = document.createElement("p");
    alert.className = "alert";
    alert.textContent = alertMessage;
    input.nextSibling.replaceWith(alert)
}

export function showFieldAlert(inputName, alertMessage) {
    const input = document.getElementById(`input-${inputName}`);
    switchBrToAlert(input, alertMessage);
    setInputAlertStatus(input);
}

function setInputAlertStatus(input) {
    input.className = "alert";
}

function removeInputAlertStatus(inputId) {
    const input = document.getElementById(inputId);
    if (input.className === "alert") {
        input.className = "";
    }
}