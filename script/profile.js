let user = getUser()

console.log(localStorage.getItem("role"))
console.log(localStorage.getItem("userId"))

document.querySelector(".login_label").textContent += user["role"]
document.querySelector("#fname").textContent = user["firstName"]
document.querySelector("#mname").textContent = user["middleName"]
document.querySelector("#lname").textContent = user["lastName"]
document.querySelector("#email").textContent += user["email"]
document.querySelector("#phoneNum").textContent += user["phoneNum"]
document.querySelector("#birthDate").textContent += user["birthDate"]

document.querySelector(".sign_out").addEventListener("click", () => {
    logout()
    window.location.replace("../pages/index.html")
})