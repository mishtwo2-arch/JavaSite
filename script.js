async function Data() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/api/test", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            login: login,
            password: password
        })
    });

    const data = await response.json();


    if (data.success) {
        window.location.href = "content.html";
    } else {
        document.getElementById("message").textContent = data.message;
    }


    document.getElementById("message").textContent = data.message;
}

document.getElementById("button").onclick = Data;