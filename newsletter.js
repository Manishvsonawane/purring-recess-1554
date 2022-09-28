



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