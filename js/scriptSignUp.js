"use strict";

//^ get elments
let nameSignUp = document.querySelector(".nameSignUp");
let emailSignUp = document.querySelector(".emailSignUp");
let passwordSignUp = document.querySelector(".passwordSignUp");
let btnSignUp = document.querySelector(".btnSignUp");
let errorName = document.querySelector(".errorName");
let errorPassword = document.querySelector(".errorPassword");
let errorEmail = document.querySelector(".errorEmail");
let errorM = document.querySelector(".errorM");
let isChecked=true

//^ variable
// charcter>3
let regexName = /^[a-z0-9_-]{3,15}$/;
// corrcet email
let regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
// we must contain  charcter+number+@+capital charcter
let regexPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

//storage emails
let emails=[]
if (localStorage.getItem("emails")) {
  emails = JSON.parse(localStorage.getItem("emails"));
}

//^ function
function validate(regex, elments) {
  console.log(regex.test(elments.value));
  if (regex.test(elments.value) === false) {
    elments.classList.add("is-invalid");
    elments.classList.remove("is-valid");
    elments.nextElementSibling.classList.remove("d-none");
    document.querySelector(".form").classList.remove("gap-4");
    document.querySelector(".form").classList.add("gap-2");
  } else {
    elments.classList.add("is-valid");
    elments.classList.remove("is-invalid");
    elments.nextElementSibling.classList.add("d-none");
    document.querySelector(".form").classList.add("gap-4");
    document.querySelector(".form").classList.remove("gap-2");
  }
  return regex.test(elments.value);
}
function checkValidation() {
  return (
    validate(regexName, nameSignUp) &&
    validate(regexEmail, emailSignUp) &&
    validate(regexPassword, passwordSignUp)
  );
}
function isCHecked() {
 
  isChecked = true;

  for (var i = 0; i < emails.length; i++) {
    if (emailSignUp.value === emails[i].userEmail) {
      errorM.classList.remove("d-none");
      isChecked = false;
      break;
    }
  }

  return isChecked; 
}


//^ event

nameSignUp.addEventListener("change", function () {
  validate(regexName, nameSignUp);
});
emailSignUp.addEventListener("change", function () {
  validate(regexEmail, emailSignUp);
});
passwordSignUp.addEventListener("change", function () {
  validate(regexPassword, passwordSignUp);
});
btnSignUp.addEventListener("click", function () {
  if (checkValidation() && isCHecked()) {
    errorM.classList.add("d-none");
    let email = {
      userName: nameSignUp.value,
      userEmail: emailSignUp.value,
      userPassword: passwordSignUp.value,
    };
    emails.push(email);
    localStorage.setItem("emails", JSON.stringify(emails));
    

    nameSignUp.value = "";
    emailSignUp.value = "";
    passwordSignUp.value = "";
    nameSignUp.classList.remove("is-valid");
    emailSignUp.classList.remove("is-valid");
    passwordSignUp.classList.remove("is-valid");
  }
});

