



  let userArr = JSON.parse(localStorage.getItem("user"))  || []
document.querySelector("#signupbtn").addEventListener("click",addUser)
function addUser(){
  
   let Fname = document.querySelector("#fname").value
   let lname = document.querySelector("#lname").value
   let email = document.querySelector("#email").value
   let country = document.querySelector("#country").value
   let language = document.querySelector("#language").value
   
   let dob = [];
   let day = document.querySelector("#dob_day").value;
   let month = document.querySelector("#dob-month").value
   let year = document.querySelector("#dob-year").value;
   let dobObj = {
    day,
    month,
    year,
   }
   dob.push(dobObj)

   let userObj = {
    Fname,
    lname,
    email,
    country,
    language,
    dob,
   }
   userArr.push(userObj)
   
   localStorage.setItem("user",JSON.stringify(userArr))
   console.log(userArr)
   alert("subscribed successfuly")
}

import navbar from "./components/navbar.js"

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()

import footer from "./components/footer.js"

let footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()

document.getElementById("womenPage").addEventListener("click",function(){
  document.location.href = "women.html"
})
document.getElementById("menPage").addEventListener("click",function(){
  window.location.href = "mens.html"
})
document.getElementById("kidPage").addEventListener("click",function(){
  window.location.href = "kids.html"
})
document.getElementById("newsletterPage").addEventListener("click",function(){
  window.location.href = "newsletter.html"
})
document.getElementById("accountPage").addEventListener("click",function(){
  window.location.href = "account.html"
})

document.getElementById("mytheresa_logo2").addEventListener("click", function(){
  window.location.href = "myCart.html"
})

document.getElementById("mytheresa_logo").addEventListener("click", function(){
  window.location.href = "index.html"
})