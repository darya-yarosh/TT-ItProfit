export default function Textarea(id, placeholder, isRequired) {
    const textarea = document.createElement("textarea");
    textarea.id = id;
    textarea.placeholder = placeholder;
    textarea.required = isRequired ? "required" : "";

    return textarea;
}