document.querySelector("#girlsbtn").addEventListener("click",function(){
    window.location.href = "girls.html"
})
document.querySelector("#boysbtn").addEventListener("click", function(){
    window.location.href = "boys.html"
})
document.querySelector("#baby").addEventListener("click", function(){
    window.location.href = "baby.html"
})
import navbar from "./components/navbar.js"

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()

import footer from "./components/footer.js"

let footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()