import { STATE } from "../../index";

import Modal from "../Modal/Modal";
import IconButton from "../IconButton/IconButton";
import RadioSelect from "../RadioSelect/RadioSelect";
import DropdownMenu from '../DropdownMenu/DropdownMenu';

import { INTERFACE, LANGUAGES } from "../../model/interface";

import { changeLanguage } from "../../logic/helper";

import languageIcon from "../../assets/icons/language.svg";

import "./MainHeader.scss";

export default function MainHeader(title) {
    const header = document.createElement("header");

    const wrapper = document.createElement("div");
    wrapper.className = "header-wrapper";

    const heading = document.createElement('h1')
    heading.textContent = title

    wrapper.append(heading);

    const dropdownElements = [];
    const iconButton = IconButton(
        "btn-language",
        languageIcon,
        INTERFACE[STATE.currentLanguage].buttonLanguage,
        INTERFACE[STATE.currentLanguage].buttonLanguageDesc,
        () => {
            function languageModal() {
                const radioSelect = RadioSelect(
                    "radioSelect-language",
                    INTERFACE[STATE.currentLanguage].selectLanguageTitle,
                    LANGUAGES,
                    STATE.currentLanguage,
                    (id) => changeLanguage(id)
                )

                const modal = Modal(null, radioSelect)
                return modal;
            }

            const modal = languageModal();
            const root = document.getElementById('root');
            root.append(modal);
        }
    )
    dropdownElements.push(iconButton);

    const dropdownMenu = DropdownMenu(dropdownElements);

    wrapper.append(dropdownMenu);
    header.append(wrapper);
    return header;
}