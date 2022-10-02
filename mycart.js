let checkingOut=()=>{
    window.location.href = "delivery.html";
  }

  let contShop=()=>{
    window.location.href = "index.html";
  };
  document.getElementById("manubtn1").addEventListener("click",function(){
   checkingOut();
  });
  document.getElementById("manubtn").addEventListener("click",function(){
  contShop();
  });
  import navbar from "./components/navbar.js"

  document.getElementById("navbar").innerHTML=navbar();

  import footer from "./components/footer.js"

  document.getElementById("footer").innerHTML=footer();

  // total products
  let mykey=JSON.parse(localStorage.getItem("cartProd"))||[];
  let x = mykey.length;
  document.querySelector("#thead").innerText = `My Cart (${x} Items)`;
  
//append product data

 

  let container=document.getElementById("containers");

  let myappend=()=>{

    let mykey=JSON.parse(localStorage.getItem("cartProd"))||[];
    container.innerHTML=null;
    let totalp=0;
    mykey.forEach(function(el,index){

      let div=document.createElement("div");
      div.setAttribute("class","manudiv");
  
      let image=document.createElement("img");
      image.src=el.imgUrl;

      let title=document.createElement("h3");
      title.innerText=el.title;

      let price=document.createElement("p");
      price.innerText=`€ ${el.price}`;
      totalp=+el.price;

      let btn=document.createElement("button");
      btn.setAttribute("class","remove_btn");
      btn.innerText="REMOVE";
      btn.addEventListener("click",function(){
        removeitem(index)
      })

      div.append(image,title,price,btn);
      container.append(div);
      document.getElementById("totalSum").innerHTML=totalp;
    })
   
  }

  myappend();

  function removeitem(index){
    mykey.splice(index,1);
    localStorage.setItem("cartProd",JSON.stringify(mykey));
    myappend();
    window.location.reload();
 }

  