import "./Modal.scss";

export default function Modal(title = null, children) {
    document.body.className = "root-with-open-modal";

    const modal = document.createElement("div");
    modal.className = "modal";

    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.onclick = () => {
        document.body.className = " ";
        const root = document.getElementById('root');
        root.removeChild(modal);
    };
    modal.append(backdrop);

    const childWrapper = document.createElement("div");
    childWrapper.className = "modal-wrapper"
    if (title !== null) {
        const titleElement = document.createElement("h2");
        titleElement.className = "modal-title"
        titleElement.textContent = title;
        childWrapper.append(titleElement);
    }

    childWrapper.append(children);
    modal.append(childWrapper);

    return modal;
}