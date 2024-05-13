var cartArray = JSON.parse(localStorage.getItem("cart"));

function addProduct(i){
    cartArray.push({
        name: document.querySelector(".product_block.b"+i+"  .prod_name").textContent,
        price: document.querySelector(".product_block.b"+i+"  .prod_cost").textContent.replace("$", ""),
        image: i
    })
    localStorage.setItem("cart", JSON.stringify(cartArray))
    updateCartNum()
}

function deleteProduct(i){
    let index = cartArray.findIndex((e) => {e.image == i})
    cartArray.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cartArray))
    updateCartNum()
}