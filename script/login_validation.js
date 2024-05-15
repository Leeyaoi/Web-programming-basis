if(localStorage.getItem('role') == "seller" || localStorage.getItem('role') == "client"){
    window.location.replace("../pages/profile.html");
}

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    if(validation(this)){
        let user = {
            email : document.getElementById("email").value,
            password : document.getElementById("password").value
        }

        user = usersArray.find((x) => x.email == user.email && x.password == user.password)
        console.log(user)
        if(user === undefined){
            alert("Invalid login/password")
            return
        }
        login(user)
        if(localStorage.getItem("lang") == "ru"){
            alert("Успешно")
        }
        else{
            alert("Success")
        }
        window.location.replace("../pages/index.html");
    }
});