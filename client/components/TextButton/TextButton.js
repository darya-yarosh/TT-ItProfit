import "./TextButton.scss";

export default function TextButton(id, type, content, desc, onClick) {
    const button = document.createElement("button");
    button.id = id;
    button.type = type;
    button.textContent = content;
    button.title = desc;
    button.onclick = onClick;

    return button;
}