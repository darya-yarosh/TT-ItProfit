async function sendRequest(formData) {
    const url = 'https://yds-itprofit-server.netlify.app/feedback';
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