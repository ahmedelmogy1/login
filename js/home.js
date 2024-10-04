//^get elment
let logOut=document.querySelector(".logOut")
let nameHome=document.querySelector(".nameHome")
//^ variable▐◘
let emails=JSON.parse(localStorage.getItem("emails"))
//^ Event
logOut.addEventListener("click",()=>{
   nameHome.innerHTML=emails[emails.length-1].userName
    location.href="../index.html";
})


if(window.location.pathname ==="/pageHome.html"){
    nameHome.innerHTML=emails[emails.length-1].userName
}

