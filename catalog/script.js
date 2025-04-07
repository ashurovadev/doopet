
const allProducts = document.querySelectorAll(".add-to-cart");

allProducts.forEach(element => {
    element.onclick = () => {
        window.location.href = "/product/";
    }
})