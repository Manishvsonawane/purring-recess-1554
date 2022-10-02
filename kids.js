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