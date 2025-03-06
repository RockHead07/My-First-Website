document.addEventListener('DOMContentLoaded', loadUsers);

const userForm = document.getElementById('userForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const userIdInput = document.getElementById('userId');
const userTableBody = document.querySelector('#userTable tbody');

let users = JSON.parse(localStorage.getItem('users')) || [];

userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userId = userIdInput.value;
    
    if (userId) {
        updateUser (userId);
    } else {
        createUser ();
    }
    renderUsers();
    userForm.reset();
});

function createUser () {
    const newUser  = {
        id: Date.now(),
        name: usernameInput.value,
        email: emailInput.value,
    };
    users.push(newUser );
    localStorage.setItem('users', JSON.stringify(users));
}

function updateUser (id) {
    const userIndex = users.findIndex(user => user.id == id);
    users[userIndex].name = usernameInput.value;
    users[userIndex].email = emailInput.value;
    localStorage.setItem('users', JSON.stringify(users));
    userIdInput.value = ''; 
}

function deleteUser (id) {
    users = users.filter(user => user.id != id);
    localStorage.setItem('users', JSON.stringify(users));
    renderUsers();
}

function editUser (id) {
    const user = users.find(user => user.id == id);
    usernameInput.value = user.name;
    emailInput.value = user.email;
    userIdInput.value = user.id; 
}

function renderUsers() {
    userTableBody.innerHTML = ''; 
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser (${user.id})">Edit</button>
                <button onclick="deleteUser (${user.id})">Delete</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

function loadUsers() {
    renderUsers(); 
}