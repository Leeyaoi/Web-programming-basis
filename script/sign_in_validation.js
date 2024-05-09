document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    if(validation(this)){
        let user = {
            firstName : document.getElementById("fname").value,
            lastName : document.getElementById("lname").value,
            middleName : document.getElementById("mname").value,
            email : document.getElementById("email").value,
            phoneNum : document.getElementById("phoneNum").value,
            birthDate : document.getElementById("birthDate").value,
            password : document.getElementById("password").value,
            role : "client"
        }

        addUser(user)
        login(user)
        alert("Success")
        window.location.replace("../pages/index.html");
    }
});