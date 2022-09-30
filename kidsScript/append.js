
function appendProd(data,container){
    let cartArr = JSON.parse(localStorage.getItem("cartProd")) || [] 
    container.innerHTML = null
    data.forEach(ele => {
        let box = document.createElement("div")

        let title = document.createElement("p")
        title.innerText= ele.title;
        title.id="prodTitle"

        let image = document.createElement("img")
        image.src = ele.imgUrl
        image.id = "img"
        image.addEventListener("mouseover",changeimg)
        image.addEventListener("mouseout",returnimg)

        let hovimg = document.createElement("img")
        hovimg.src = ele.hovimg
        hovimg.id = "hovimg"
        let price = document.createElement("p")
        price.innerText = `€ ${ele.price}`;
        price.id = "prodPrice"

        let btn = document.createElement("button")
        btn.innerText = "Add to Cart"
        btn.id = "cartBtn"
        btn.addEventListener("click",function(){
            cartArr.push(ele);
            localStorage.setItem("cartProd",JSON.stringify(cartArr))
        })
        
        box.append(image,title,price,btn)
        container.append(box)



        function changeimg(){
            image.setAttribute("src",ele.hovimg)
        }
    
        function returnimg(){
        image.setAttribute("src",ele.imgUrl)
        }
    });
}
export default appendProd;

