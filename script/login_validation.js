if(localStorage.getItem('role') == "seller" || localStorage.getItem('role') == "client"){
    window.location.replace("../pages/profile.html");
}

document.querySelector(".login_btn").addEventListener("click", () => {
    document.querySelector(".login_modal").classList.add("open")
    document.querySelector("body").classList.add("overflow")
})

document.querySelector(".modal_close_login").addEventListener('click', event => {
    document.querySelector(".login_modal").classList.remove('open');
    document.querySelector("body").classList.remove("overflow")
});

document.querySelector(".login_modal .login_modal_box").addEventListener('click', event => {
    event._isClickWithInModal = true;
})
document.querySelector(".login_modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    document.querySelector("body").classList.remove("overflow")
});

document.querySelector(".login_form").addEventListener("submit", function(event){
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