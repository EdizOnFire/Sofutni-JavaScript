async function onLogin(e) {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));
    let data = { email: email, password: password };
    const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    data = await response.json();
    if (data.accessToken !== undefined) {
        localStorage.setItem("authToken", data.accessToken);
    } else {
        alert("Incorrect login");
    }
}

async function onRegister(e) {
    e.preventDefault();
    const { email, password, rePass } = Object.fromEntries(new FormData(e.currentTarget));
    let data = { email: email, password: password, rePass: rePass };
    let response = await fetch(`${url}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
    });

    response = await response.json()

    if (data.password !== data.rePass) {
        alert("Passwords don't match");
    } else if (data.message === 'A user with the same email already exists') {
        alert('A user with the same email already exists');
    } else {
        localStorage.setItem("authToken", response.accessToken);
    }
}

async function onLogout() {
    const authToken = localStorage.getItem('authToken')

    const response = await fetch(`${url}/logout`, {
        method: "GET",
        headers: { 'X-Authorization': authToken }
    });

    localStorage.clear();
}

async function getData(urlInput) {
    const response = await fetch(urlInput);
    return response.json();
}