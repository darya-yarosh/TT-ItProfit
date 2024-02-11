import { STATE } from "../../index.js";

import IconButton from "../IconButton/IconButton";

import { INTERFACE } from "../../model/interface";

import menuIcon from "../../assets/icons/menu.svg";

import "./DropdownMenu.scss";

export default function DropdownMenu(childrenList) {
    const nav = document.createElement("nav");
    nav.className = "dropdown";

    const openMenuButton = IconButton(
        "btn-dropdown",
        menuIcon,
        null,
        INTERFACE[STATE.currentLanguage].buttonDropdownDesc,
        () => { }
    )
    nav.append(openMenuButton);

    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";

    childrenList.forEach(children => {
        const dropDownElem = document.createElement("div");
        dropDownElem.className = "dropdown-element";
        dropDownElem.append(children);
        dropdownContent.append(dropDownElem);
    })

    nav.append(dropdownContent);
    return nav;
}