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
        name: document.getElementById('Name').value,
        category: document.getElementById('Category').value,
        price: document.getElementById('price').value,
        description: document.getElementById('Description').value
    };

    products.push(data);
    console.log(products);

    document.getElementById('Name').value = '';
    document.getElementById('Category').value = '';
    document.getElementById('price').value = '';
    document.getElementById('Description').value = '';

};

document.getElementById("Form").addEventListener("submit", handleProductData);