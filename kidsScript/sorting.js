
  //sorting 
  function PriceSort(appendProd,data,container){
    let selected = document.querySelector("#sort").value;
    if(selected === "Acs"){
      data.sort(function(a,b){
        return parseFloat(a.price) - parseFloat(b.price)
      })
      appendProd(data,container)
    }
    if(selected === "Desc"){
      data.sort(function(a,b){
        return parseFloat(b.price)-parseFloat(a.price)
      })
    appendProd(data,container)
    }
  }

  export {PriceSort};