import config from "../../config.json";
import { STATE } from "../index";

export async function sendRequest(formData) {
    const API = config.isLocal
        ? config.localUrl
        : config.netlifyUrl;
    const url = `${API}/api/feedback`;

    formData.clientLang = STATE.currentLanguage;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData)
    });
    const result = await response.json();

    return result;
}
