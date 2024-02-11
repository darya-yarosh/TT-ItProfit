export default function Input(id, type, placeholder = null, isRequired) {
    const input = document.createElement("input");
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    input.required = isRequired ? "required" : "";

    return input;
}