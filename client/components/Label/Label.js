export default function Label(id, htmlFor, content) {
    const label = document.createElement("label");
    label.id = id;
    label.htmlFor = htmlFor;
    label.textContent = content;

    return label;
}