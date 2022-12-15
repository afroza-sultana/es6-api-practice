function loadUsers (){
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => displayUsers(data))
}
loadUsers();

const displayUsers = (users) => {
const usersDiv = document.getElementById("users-div");
    users.forEach(user => {
const userDetail = document.createElement("div");
    userDetail.innerHTML = `
    <h3>name: ${user.results[0]} </h3>
    `;
    usersDiv.appendChild(userDetail);
    
    })
    console.log(usersDiv)
}
