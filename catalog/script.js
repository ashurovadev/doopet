
const allProducts = document.querySelectorAll(".product-card");

allProducts.forEach(element => {
    element.onclick = () => {
        window.location.href = "/product/";
    }
})