const email=document.getElementById("email");
const password=document.getElementById("password");
const uname=document.getElementById("uname");
uname.focus();   
var form=document.getElementsByClassName("myform")[0];
var eyebtn=document.getElementById("eye");
var clear=document.getElementById("clear");
var abs=document.getElementsByClassName("abs")[0];

// eye button that reveals the password

eyebtn.addEventListener('click', ()=>{
   password.classList.toggle("show");
    
   if(password.classList.contains("show")){
       password.setAttribute("type","text");
       eyebtn.src="images/eyeopen.png";
    }
    else if(!(password.classList.contains("show"))) {
        password.setAttribute("type","password");
        eyebtn.src="images/eyeclose.png"
   }
})

//form submit event and localstorage assigining

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(localStorage.getItem("username")){
        abs.classList.add("abs2");
        setTimeout(() => {
        abs.classList.remove("abs2");
    }, 4000);
    setTimeout(()=>{
        window.location.assign("index2.html");
    },3000)
    }
    else{
        const userName=uname.value;
        const userEmail=email.value;
        const userPassword=password.value;
        localStorage.setItem("username",userName);
        localStorage.setItem("useremail",userEmail);
        localStorage.setItem("userpassword",userPassword);
        window.location.assign("index2.html");
    }
});
clear.addEventListener('click',()=>{
    const data_array=["username","useremail","userpassword"];
    data_array.forEach((item)=>{
        localStorage.removeItem(item);
    })
})

