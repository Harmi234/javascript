document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let productName = document.getElementById('productName').value;
    let productPrice = document.getElementById('productPrice').value;
    let productImage = document.getElementById('productImage').value;

    let products = JSON.parse(localStorage.getItem('products')) || [];

    let product = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    products.push(product);

    localStorage.setItem('products', JSON.stringify(products));

    document.getElementById('productForm').reset();

    window.location.href = './home.html';
});