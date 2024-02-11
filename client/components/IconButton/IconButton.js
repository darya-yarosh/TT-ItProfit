import Label from "../Label/Label";

import "./IconButton.scss";

export default function IconButton(id, iconSrc, labelValue = null, alt, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.id = id;
    button.className = `btn-icon-wrapper`
    button.onclick = onClick;
    button.alt = alt;

    const icon = document.createElement("img");
    icon.className = "btn-icon";
    icon.src = iconSrc;
    button.append(icon)

    if (labelValue !== null) {
        const label = Label(
            "label-iconBtn",
            button.id,
            labelValue
        )
        button.append(label);
    }
    return button;
}