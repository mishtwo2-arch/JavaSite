async function Data() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:25565/api/test", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            login: login,
            password: password
        })
    });

    console.log(await response.text());
}

document.getElementById("button").onclick = Data;