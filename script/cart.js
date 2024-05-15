if(cartArray.length == 0){
    document.querySelector(".cart_header").innerHTML = "Your cart is empty" 
    document.querySelector(".cart_header").dataset.lang = "empty"
    document.querySelector(".total_cost").innerHTML += "0.00" 
}
else{
    document.querySelector(".cart_header").innerHTML += "("+cartArray.length+")" 
    const wrapper = document.querySelector(".wrapper")
    let price = 0.0
    for(let i = 0; i < cartArray.length; i++){
        price += parseFloat(cartArray[i]["price"])
        wrapper.appendChild(createElement(cartArray[i], i))
        document.querySelector(".del_btn.b"+i).addEventListener("click", () => {
            deleteProduct(cartArray[i]["image"])
            location.reload()
        })
    }
    document.querySelector(".total_cost").innerHTML += price 
}

function createElement(product, i){
    const newDiv = document.createElement("div");
    newDiv.classList.add("prod")
    newDiv.classList.add("b"+i)

    const image = document.createElement("img");
    image.src = "../source/products/prod"+product["image"]+"/1.png"
    image.classList.add("prod_img")

    const name = document.createElement("p")
    name.innerHTML = product["name"]
    name.classList.add("prod_name")
    name.dataset.lang = "b"+product["image"]

    const price = document.createElement("p")
    price.innerHTML = "$"+product["price"]
    price.classList.add("prod_price")

    const btn = document.createElement("div")
    if(localStorage.getItem("lang") == "ru"){
        btn.innerHTML = "Удалить"
    }
    else{
        btn.innerHTML = "delete"
    }
    btn.classList.add("button")
    btn.classList.add("del_btn")
    btn.classList.add("b"+i)
    btn.dataset.lang = "del_btn"

    newDiv.appendChild(image)
    newDiv.appendChild(name)
    newDiv.appendChild(price)
    newDiv.appendChild(btn)

    return newDiv
}