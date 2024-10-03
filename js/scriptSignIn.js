"use strict";

//^ GET ELMENT
let emailSignIn = document.querySelector(".emailSignIn");
let passwordSignIn = document.querySelector(".passwordSignIn");
let btnSignIn = document.querySelector(".btnSignIn");
let errorSignIn1 = document.querySelector(".errorSignIn1 ");
let errorSignIn2 = document.querySelector(".errorSignIn2 ");
// nameSignIn.addEventListener("click",function(){
//     validate(regexName,document.querySelector(".nameSignIn"))
// })

//^ VARIABLE
// corrcet email
let regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
// we must contain  charcter+number+@+capital charcter
let regexPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

localStorage.setItem("logedUser", false);
let emails;
if (localStorage.getItem("emails")) {
  emails = JSON.parse(localStorage.getItem("emails"));
}
//^FUNCTION
function validate(regex, elments) {
  console.log(regex.test(elments.value));

  if (regex.test(elments.value) === false) {
    if (elments.value === "" && elments.value === "") {
      errorSignIn2.classList.remove("d-none");
      return;
    }
    elments.classList.add("is-invalid");
  } else {
    elments.classList.remove("is-invalid");
    return regex.test(elments.value);
  }
}
function checkValidation() {
  return (
    validate(regexEmail, emailSignIn) && validate(regexPassword, passwordSignIn)
  );
}

//^ EVENT

emailSignIn.addEventListener("change", function () {
  validate(regexEmail, document.querySelector(".emailSignIn"));
  errorSignIn2.classList.add("d-none");
});

passwordSignIn.addEventListener("change", function () {
  validate(regexPassword, document.querySelector(".passwordSignIn"));
});

btnSignIn.addEventListener("click", function () {
  if (checkValidation() === true) {
    emails = JSON.parse(localStorage.getItem("emails"));
    let flag = true;
    for (let i = 0; i < emails.length; i++) {
      if (
        emailSignIn.value === emails[i].userEmail &&
        passwordSignIn.value === emails[i].userPassword
      ) {
        window.location.href = "/home.html";
        localStorage.setItem("logedUser", true);
        emailSignIn.classList.remove("is-invalid");
        passwordSignIn.classList.remove("is-invalid");

        return;
      } else {
        localStorage.setItem("logedUser", false);
      }
    }
    if (flag) {
      errorSignIn1.classList.remove("d-none");
    }
  }
});
