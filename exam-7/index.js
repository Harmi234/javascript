// Product form
let products = [];

const delete1 = (index) => {
    let productSection = document.getElementById("product-section");
    let productCards = document.getElementsByClassName('product-card');
    if (index < productCards.length) {
        productSection.removeChild(productCards[index]);
    }
};

const handleProductData = (e) => {
    e.preventDefault();
    let data = {
        Pname: document.getElementById('Name').value,
        PCategory: document.getElementById('Category').value,
        Pprice: document.getElementById('price').value,
        PDescription: document.getElementById('Description').value

    }
    products.push(data);
    console.log(products);
        
}
document.getElementById("product-section").addEventListener("Buy", handleProductData);

