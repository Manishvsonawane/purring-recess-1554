let babyData = [
    {
        imgUrl:"https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/1a/P00719705.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/1a/P00719705_b1.jpg",
        title:"THE ANIMALS OBSERVATORY",
        price:"55",
    },
    {
        imgUrl:"https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/cf/P00717293.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/cf/P00717293_d2.jpg",
        title:"OFF-WHITE KIDS",
        price:"549",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c2/P00708497.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c2/P00708497_b1.jpg",
        title:"MONCLER ENFANT",
        price:"119",
    },
    {
        imgUrl:"https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/3a/P00708490.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3a/P00708490_b1.jpg",
        title:"MONCLER ENFANT",
        price:"415",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/9a/P00687677.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/9a/P00687677_b1.jpg",
        title:"STELLA MCCARTNEY KIDS",
        price:"79",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/72/P00687872.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/72/P00687872_b1.jpg",
        title:"STELLA MCCARTNEY KIDS",
        price:"115",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00687839.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00687839_b1.jpg",
        title:"STELLA MCCARTNEY KIDS",
        price:"135",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/91/P00722689.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/91/P00722689_b1.jpg",
        title:"BURBERRY KIDS",
        price:"395",
    },
    {
        imgUrl:"https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/56/P00715757.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/56/P00715757_b1.jpg",
        title:"BONPOINT",
        price:"155",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7b/P00719906.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7b/P00719906_b1.jpg",
        title:"TARTINE ET CHOCOLAT",
        price:"75",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6b/P00696327.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6b/P00696327_b1.jpg",
        title:"BOBO CHOSES",
        price:"119",
    },
    {
        imgUrl:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/5c/P00717933.jpg",
        hovimg:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/5c/P00717933_b1.jpg",
        title:"CARAMEL",
        price:"39",
    },
]

import appendProd from "./kidsScript/append.js"

let container = document.querySelector("#products")

appendProd(babyData,container)

document.querySelector("#length").innerHTML = `${babyData.length} Products`

import {PriceSort} from "./kidsScript/sorting.js"
document.querySelector("#sort").addEventListener("change",function(){
    PriceSort(appendProd,babyData,container)
})