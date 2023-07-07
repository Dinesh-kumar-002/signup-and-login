var loginUserEmail = document.getElementsByClassName("useremail")[0];
loginUserEmail.focus();
var loginUserPassword = document.getElementsByClassName("userpassword")[0];
var welcome = document.getElementsByClassName("welcome2")[0];
var myform2 = document.getElementsByClassName("myform2")[0];
var popupemail = document.getElementById("mypopup");
var popuppassword = document.getElementById("mypopup2");

if (localStorage.getItem("username")) {
  var username = document.createElement("span");
  username.classList.add("span");
  username.append(localStorage.getItem("username") + "!");
  welcome.append(username);
}
else{
    var username = document.createElement("span");
  username.classList.add("span");
  username.append(localStorage.getItem("username") + "!");
  welcome.append(username);
}
var eyebtn = document.getElementById("eye");

eyebtn.addEventListener("click", () => {
  password.classList.toggle("show");

  if (password.classList.contains("show")) {
    password.setAttribute("type", "text");
    eyebtn.src = "images/eyeopen.png";
  } else if (!password.classList.contains("show")) {
    password.setAttribute("type", "password");
    eyebtn.src = "images/eyeclose.png";
  }
});
myform2.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    localStorage.getItem("useremail") == loginUserEmail.value &&
    localStorage.getItem("userpassword") == loginUserPassword.value
  ) {
    window.location.assign("https://dinesh-kumar-002.github.io/ToDo/");
  } else if (localStorage.getItem("useremail") != loginUserEmail.value) {
    showpopupEmail();
  } else if (localStorage.getItem("userpassword") != loginUserPassword.value) {
    showpopupPassword();
  }
});
function showpopupEmail() {
  popupemail.classList.add("showpop");
  setTimeout(() => {
    popupemail.classList.remove("showpop");
  }, 1000);
}
function showpopupPassword() {
  popuppassword.classList.add("showpop2");
  setTimeout(() => {
    popuppassword.classList.remove("showpop2");
  }, 1000);
}
