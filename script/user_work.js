var usersArray = JSON.parse(localStorage.getItem("users"));

function addUser(user){
    usersArray.push(user)

    console.log(JSON.stringify(usersArray))
}

function login(user){
    localStorage.setItem('role', user.role)
    localStorage.setItem('userId', 
        usersArray.findIndex((x) => x.email == user.email && x.password == user.password)
    )
}

function getUser(){
    console.log(usersArray)
    return usersArray[localStorage.getItem('userId')];
}

function logout(){
    localStorage.setItem('role', 'none')
    localStorage.setItem('userId', -1)
}