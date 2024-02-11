import Input from "../Input/Input";
import Label from "../Label/Label";

import "./RadioSelect.scss";

export default function RadioSelect(id, title = null, options, checked, onChange) {
    const radioSelect = document.createElement("div");
    radioSelect.id = id;
    radioSelect.className = "radioSelect-wrapper";

    if (title !== null) {
        const titleElement = document.createElement("h2");
        titleElement.className = "radioSelect-title";
        titleElement.textContent = title;
        radioSelect.append(titleElement);
    }

    options.forEach((option) => {
        const inputWrapperRU = document.createElement("div");
        inputWrapperRU.className = checked === option.id
            ? "input-wrapper checked"
            : "input-wrapper";
        inputWrapperRU.onclick = () => onChange(option.id);

        const radio = Input(
            `option-${option.id}`,
            "radio",
            null,
            false,
        )
        radio.value = option.id;
        radio.label = option.value;
        radio.checked = checked === option.id;
        radio.onchange = onChange;
        const label = Label(
            `label-${option.id}`,
            radio.id,
            option.value
        )
        inputWrapperRU.append(radio, label);
        radioSelect.append(inputWrapperRU)
    })

    return radioSelect;
}