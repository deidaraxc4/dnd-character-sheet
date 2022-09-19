const sendMessage = (hookUrl, msg) => {
    fetch(hookUrl, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: msg
        })
    })
}

export { sendMessage }