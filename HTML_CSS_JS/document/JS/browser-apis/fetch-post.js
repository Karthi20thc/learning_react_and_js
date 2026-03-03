fetch("http://localhost:8000/api/data", {
    method: "POST",
    credentials: "include",   // VERY IMPORTANT
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken
    },
    body: JSON.stringify(data)
});