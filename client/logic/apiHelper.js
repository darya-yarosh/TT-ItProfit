async function sendRequest(formData) {
    const url = 'http://127.0.0.1:9090/api/feedback';
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

module.exports = {
    sendRequest,
}