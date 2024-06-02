if (
  localStorage.getItem("role") == "seller" ||
  localStorage.getItem("role") == "client"
) {
  window.location.replace("../pages/profile.html");
}

document.querySelector(".login_btn").addEventListener("click", () => {
  document.querySelector(".login_modal").classList.add("open");
  document.querySelector("body").classList.add("overflow");
});

document
  .querySelector(".modal_close_login")
  .addEventListener("click", (event) => {
    document.querySelector(".login_modal").classList.remove("open");
    document.querySelector("body").classList.remove("overflow");
  });

document
  .querySelector(".modal_close_success")
  .addEventListener("click", (event) => {
    document.querySelector(".success").classList.remove("open");
    document.querySelector("body").classList.remove("overflow");
    setTimeout(() => {
      window.location.replace("../pages/index.html");
    }, 500);
  });

document
  .querySelector(".modal_close_not_success")
  .addEventListener("click", (event) => {
    document.querySelector(".not_success").classList.remove("open");
    document.querySelector("body").classList.remove("overflow");
  });

document
  .querySelector(".login_modal .login_modal_box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.querySelector(".login_modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
  document.querySelector("body").classList.remove("overflow");
});

document
  .querySelector(".login_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (validation(this)) {
      let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      user = usersArray.find(
        (x) => x.email == user.email && x.password == user.password
      );
      console.log(user);
      if (user === undefined) {
        document.querySelector(".not_success").classList.add("open");
        document.querySelector("body").classList.add("overflow");
        return;
      }
      login(user);
      document.querySelector(".success").classList.add("open");
      document.querySelector("body").classList.add("overflow");
    }
  });
