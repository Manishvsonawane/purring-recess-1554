import navbar from "./components/navbar.js"

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()

import footer from "./components/footer.js"

let footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()




document.querySelector("#signupbtn").addEventListener("click",signupbtn)

function signupbtn(){
    let fname = document.getElementById("fname").value;
    localStorage.setItem("fname",fname)
    let lname = document.getElementById("lname").value;
    localStorage.setItem("lname",lname)
    let email = document.getElementById("email").value;
    localStorage.setItem("email",email)
    let pass = document.getElementById("password").value;
    let cinfPass = document.getElementById("confirmPass").value;
    if(pass===cinfPass){
        localStorage.setItem("pass",pass)
        alert("Registered Successfully")
    }else{
        document.getElementById("notmatch").innerText = "Password don't Match"
    }
    
}

document.querySelector("#loginbtn").addEventListener("click", loginbtn)

function loginbtn(){
    let loginEmail = document.querySelector("#email").value;
    // localStorage.setItem("loginEmail",loginEmail)
    let loginPass = document.querySelector("#password").value;
    // localStorage.setItem("loginPass",loginPass)

    let storeEmail = localStorage.getItem("email")
    let storePass = localStorage.getItem("pass")

    if(loginEmail === storeEmail && loginPass === storePass){
         alert("Login Successful")
    }else{
        alert("Incorrect Password or email")
    }
}

