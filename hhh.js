document.getElementById('fetch-user').addEventListener('click', fetchUser);

function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUser(user);
        })
        .catch(error => console.error('Error:', error));
}

function displayUser(user) {
    const userInfo = document.getElementById('user-info');
    userInfo.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Gender:</strong> ${user.gender}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
    `;
}
