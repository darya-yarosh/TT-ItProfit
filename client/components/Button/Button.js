import "./Button.scss";

export default function Button(id, type, content, desc, onClick) {
    const button = document.createElement("button");
    button.className = "btn-default";
    button.id = id;
    button.type = type;
    button.textContent = content;
    button.title = desc;
    button.onclick = onClick;

    return button;
}