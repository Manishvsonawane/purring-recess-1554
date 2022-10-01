let girlsData = [
    {imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6f/P00708664.jpg",
      hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6f/P00708664_b1.jpg",
      title:"MONCLER ENFANT",
      price:"445",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/31/P00715967.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/31/P00715967_b1.jpg",
        title:"BONPOINT",
        price:"155",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/68/P00684749.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/68/P00684749_b1.jpg",
        title:"POLO RALPH LAUREN KIDS",
        price:"65",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/8b/P00728371.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/8b/P00728371_b1.jpg",
        title:"KENZO KIDS",
        price:"115",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ab/P00728743.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ab/P00728743_b1.jpg",
        title:"KENZO KIDS",
        price:"115",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/20/P00728770.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/20/P00728770_b1.jpg",
        title:"KENZO KIDS",
        price:"195",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6e/P00728377.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6e/P00728377_b1.jpg",
        title:"KENZO KIDS",
        price:"89",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/22/P00716373.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/22/P00716373_b1.jpg",
        title:"WOOLRICH KIDS",
        price:"305",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/44/P00721870.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/44/P00721870_b1.jpg",
        title:"POLO RALPH LAUREN KIDS",
        price:"89",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/f2/P00724736.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/f2/P00724736_b1.jpg",
        title:"MINI RODINI",
        price:"85",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ba/P00703334.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ba/P00703334_b1.jpg",
        title:"BRUNELLO CUCINELLI KIDS",
        price:"289",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2c/P00724787.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2c/P00724787_b1.jpg",
        title:"DOLCE&GABBANA KIDS",
        price:"165",
    }
]

import appendProd from "./kidsScript/append.js"

let container = document.querySelector("#products")

appendProd(girlsData,container)

document.querySelector("#length").innerHTML = `${girlsData.length} Products`

import {PriceSort} from "./kidsScript/sorting.js"
document.querySelector("#sort").addEventListener("change",function(){
    PriceSort(appendProd,girlsData,container)
})

import navbar from "./components/navbar.js"

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()

import footer from "./components/footer.js"

let footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()
