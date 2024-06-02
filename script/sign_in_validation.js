document.querySelector(".sign_in_btn").addEventListener("click", () => {
  document.querySelector(".sign_in_modal").classList.add("open");
  document.querySelector("body").classList.add("overflow");
});

document
  .querySelector(".modal_close_sign_in")
  .addEventListener("click", (event) => {
    document.querySelector(".sign_in_modal").classList.remove("open");
    document.querySelector("body").classList.remove("overflow");
  });

document
  .querySelector(".sign_in_modal .sign_in_modal_box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.querySelector(".sign_in_modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
  document.querySelector("body").classList.remove("overflow");
});

document
  .querySelector(".sign_in_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (validation(this)) {
      let user = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        middleName: document.getElementById("mname").value,
        email: document.getElementById("emailS").value,
        phoneNum: document.getElementById("phoneNum").value,
        birthDate: document.getElementById("birthDate").value,
        password: document.getElementById("passwordS").value,
        role: "client",
      };

      addUser(user);
      login(user);
      document.querySelector(".success").classList.add("open");
      document.querySelector("body").classList.add("overflow");
    }
  });
