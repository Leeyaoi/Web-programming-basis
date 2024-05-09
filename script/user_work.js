let usersArray = [];

//const fs = require('fs');

function getUsers() {
    fetch("../source/json/users.json")
        .then(response => response.json())
        .then(users => {
            usersArray = users;
        })
        .catch(error => {
            console.error('Ошибка при получении пользователей', error);
        });
};

getUsers();

function addUser(user){
    usersArray.push(user)
    
    //fs.writeFile("../source/json/users.json", JSON.stringify(usersArray), err => {if (err) throw err})

    console.log(JSON.stringify(usersArray))
}

function login(user){
    localStorage.setItem('role', user.role)
    localStorage.setItem('userId', 
        usersArray.findIndex((x) => x.email == user.email && x.password == user.password)
    )
}