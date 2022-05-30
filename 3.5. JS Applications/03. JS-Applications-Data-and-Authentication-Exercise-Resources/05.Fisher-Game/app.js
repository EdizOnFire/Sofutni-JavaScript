const url = "http://localhost:3030/users";
const mainElement = document.querySelector("main");
const homeBtnElement = document.querySelector("#home");
const loginBtnElement = document.querySelector("#login");
const logoutBtnElement = document.querySelector("#logout");
const registerBtnElement = document.querySelector("#register");

const viewsElement = document.querySelector("#views");
const loginFormElement = document.querySelector("section #login");
const registerFormElement = document.querySelector("section #register");
const homeFormElement = document.querySelector("#home-view");

let currentUser;

function eventListeners() {
    viewsElement.style.display = "none";
    logoutBtnElement.style.display = "none";
    homeBtnElement.addEventListener("click", loadHome);
    loginBtnElement.addEventListener("click", loadLoginForm);
    registerBtnElement.addEventListener("click", loadRegisterForm);
    loginFormElement.addEventListener("submit", onLogin);
    registerFormElement.addEventListener("submit", onRegister);
    logoutBtnElement.addEventListener("click", onLogout);
}

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    let data = { email: email, password: password };
    const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    data = await response.json();
    if (data.accessToken !== undefined) {
        currentUser = data;
        logoutBtnElement.style.display = "block";
        loginBtnElement.style.display = "none";
        registerBtnElement.style.display = "none";
        localStorage.setItem("authToken", data.accessToken);
        mainElement.innerHTML = "";
        mainElement.appendChild(homeFormElement);
    } else {
        alert("Incorrect login");
    }
}

async function onRegister(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");
    let repeatPassword = formData.get("rePass");
    let data = { email: email, password: password, repeatPassword: repeatPassword };
    let response = await fetch(`${url}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
    });

    response = await response.json()

    if (data.password !== data.repeatPassword) {
        alert("Passwords don't match");
    } else if (data.message === 'A user with the same email already exists') {
        alert('A user with the same email already exists');
    } else {
        localStorage.setItem("authToken", response.accessToken);
        currentUser = response;
        logoutBtnElement.style.display = "block";
        loginBtnElement.style.display = "none";
        registerBtnElement.style.display = "none";
        mainElement.innerHTML = "";
        mainElement.appendChild(homeFormElement);
    }
}

async function onLogout() {
    logoutBtnElement.style.display = "none";
    registerBtnElement.style.display = "inline-block";
    loginBtnElement.style.display = "inline-block";
    homeFormElement.style.display = "inline-block";

    const authToken = localStorage.getItem('authToken')

    const response = await fetch(`${url}/logout`, {
        method: "GET",
        headers: { 'X-Authorization': authToken }
    });

    localStorage.clear();
}

function loadLoginForm() {
    mainElement.innerHTML = "";
    const button = loginFormElement.children[3];
    button.setAttribute("type", "submit");
    mainElement.appendChild(loginFormElement.parentNode);
}

function loadRegisterForm() {
    mainElement.innerHTML = "";
    const button = registerFormElement.children[4];
    button.setAttribute("type", "submit");
    mainElement.appendChild(registerFormElement.parentNode);
}

function loadHome() {
    mainElement.innerHTML = "";
    mainElement.appendChild(homeFormElement);
}

async function getData(urlInput) {
    const response = await fetch(urlInput);
    return response.json();
}

eventListeners();
