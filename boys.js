
let boysData = [
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/9d/P00680095.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/9d/P00680095_b1.jpg",
        title:"GUCCI KIDS",
        price:"325",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/fc/P00687589.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/fc/P00687589_b1.jpg",
        title:"STELLA MCCARTNEY KIDS",
        price:"135",
    },
    {
        imgUrl:"https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/80/P00688034.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/80/P00688034_b1.jpg",
        title:"STELLA MCCARTNEY KIDS",
        price:"45",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4f/P00714155.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4f/P00714155_b1.jpg",
        title:"IL GUFO",
        price:"279",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/33/P00720709.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/33/P00720709_b1.jpg",
        title:"MARC JACOBS KIDS",
        price:"69",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2c/P00687707.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2c/P00687707_b1.jpg",
        title:"STELLA MCCARTNEY KIDS",
        price:"149",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/43/P00691749.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/43/P00691749_b1.jpg",
        title:"BALMAIN KIDS",
        price:"165",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c4/P00708720.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c4/P00708720_b1.jpg",
        title:"MONCLER ENFANT",
        price:"425",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ac/P00728278.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ac/P00728278_b1.jpg",
        title:"STELLA MCCARTNEY KIDS",
        price:"95",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/44/P00687527.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/44/P00687527_b1.jpg",
        title:"STELLA MCCARTNEY KIDS",
        price:"59",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/5a/P00720666.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/5a/P00720666_b1.jpg",
        title:"MARC JACOBS KIDS",
        price:"85",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7c/P00720678.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7c/P00720678_b1.jpg",
        title:"MARC JACOBS KIDS",
        price:"79",
    },
]



import appendProd from "./kidsScript/append.js"

let container = document.querySelector("#products")

 appendProd(boysData,container)
 

document.querySelector("#length").innerHTML = `${boysData.length} Products`

import {PriceSort} from "./kidsScript/sorting.js"
document.querySelector("#sort").addEventListener("change",function(){
    PriceSort(appendProd,boysData,container)
})

import navbar from "./components/navbar.js"

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()

import footer from "./components/footer.js"

let footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()


