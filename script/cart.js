if(cartArray.length == 0){
    document.querySelector(".cart_header").textContent = "Your cart is empty" 
    document.querySelector(".total_cost").textContent += "0.00" 
}
else{
    document.querySelector(".cart_header").textContent += "("+cartArray.length+")" 
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
    document.querySelector(".total_cost").textContent += price 
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

    const price = document.createElement("p")
    price.innerHTML = "$"+product["price"]
    price.classList.add("prod_price")

    const btn = document.createElement("div")
    btn.innerHTML = "delete"
    btn.classList.add("button")
    btn.classList.add("del_btn")
    btn.classList.add("b"+i)

    newDiv.appendChild(image)
    newDiv.appendChild(name)
    newDiv.appendChild(price)
    newDiv.appendChild(btn)

    return newDiv
}