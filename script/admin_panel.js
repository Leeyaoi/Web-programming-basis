if(localStorage.getItem("role") != "seller"){
    if(localStorage.getItem("lang") == "ru"){
        alert("Нет доступа")
    }
    else{
        alert("You can't see")
    }
    window.location.replace("../pages/index.html")
}

if(usersArray.length == 0){
    document.querySelector(".user_header").textContent = "There are no users"
    document.querySelector(".user_header").dataset.lang = "empty"
}
else{
    document.querySelector(".user_header").innerHTML += "("+usersArray.length+")" 
    const wrapper = document.querySelector(".wrapper")
    for(let i = 0; i < usersArray.length; i++){
        wrapper.appendChild(createElement(usersArray[i], i))
    }
}

function createElement(user, i){
    const newDiv = document.createElement("div");
    newDiv.classList.add("user")
    newDiv.classList.add("b"+i)

    const fname = document.createElement("div")
    fname.innerHTML = user["firstName"]
    fname.classList.add("user_fname")
    
    const mname = document.createElement("div")
    mname.innerHTML = user["middleName"]  != "" ? user["middleName"] : "-"
    mname.classList.add("user_mname")
    
    const lname = document.createElement("div")
    lname.innerHTML = user["lastName"]
    lname.classList.add("user_lname")

    const phone = document.createElement("div")
    phone.innerHTML = user["phoneNum"]
    phone.classList.add("user_phone")

    const email = document.createElement("div")
    email.innerHTML = user["email"]
    email.classList.add("user_email")

    const date = document.createElement("div")
    date.innerHTML = user["birthDate"]
    date.classList.add("user_date")

    const role = document.createElement("div")
    role.innerHTML = user["role"]
    role.classList.add("user_role")

    newDiv.appendChild(fname)
    newDiv.appendChild(mname)
    newDiv.appendChild(lname)
    newDiv.appendChild(phone)
    newDiv.appendChild(email)
    newDiv.appendChild(date)
    newDiv.appendChild(role)

    return newDiv
}