import { STATE } from "../../index";

import { INTERFACE } from "../../model/interface";

import "./MainFooter.scss";

export default function MainFooter() {
    const footer = document.createElement("footer");

    const wrapper = document.createElement("div");

    const info = document.createElement("p");
    info.innerHTML = "© 2024, ";

    const authorGithub = document.createElement("a");
    authorGithub.innerHTML = INTERFACE[STATE.currentLanguage].author;
    authorGithub.title = INTERFACE[STATE.currentLanguage].authorLinkDesc;
    authorGithub.href = "github.com/darya-yarosh";

    info.append(authorGithub);

    wrapper.append(info);
    footer.append(wrapper);
    return footer;
}