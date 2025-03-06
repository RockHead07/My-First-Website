
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const adminUsername = "admin";
const adminPassword = "admin123";

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

document.querySelector('.sign-up form').addEventListener('submit', (e) => {
    e.preventDefault(); 
    window.location.href = '../index.html'; 
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.querySelector('.sign-in form').addEventListener('submit', (e) => {
    e.preventDefault(); 

    const username = document.querySelector('.sign-in input[type="text"]').value.trim();
    const password = document.querySelector('.sign-in input[type="password"]').value.trim();

    if (username === adminUsername && password === adminPassword) {
        alert("Welcome Back, Admin!");
        window.location.href = '../Admin-Page/index.html';
    } else {
        alert("Invalid username or password");
    }
});
