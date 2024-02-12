import config from "../../config.json";

export async function sendRequest(formData) {
    const API = config.isLocal
        ? config.localUrl
        : config.netlifyUrl;
    const url = `${API}/api/feedback`;

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
