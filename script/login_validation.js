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
        alert("Success")
        window.location.replace("../pages/index.html");
    }
});