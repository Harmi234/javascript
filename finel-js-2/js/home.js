let isLogin = localStorage.getItem("isLogin");

if (isLogin) {
    let username = localStorage.getItem("username");
    let photo = localStorage.getItem("userPhoto"); 

    document.getElementById("profileName").innerText = username || "User"; 
    document.getElementById("profileImage").src = photo || "default_image.png"; 
} else {
    window.location.href = "./login.html";
}

let products = JSON.parse(localStorage.getItem('products')) || []; 

function displayProducts(productsToDisplay = products) {
    let productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; 

    productsToDisplay.forEach((product, index) => {
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button class="btn btn-danger" onclick="deleteProduct(${index})">Delete</button>
        `;
        productContainer.appendChild(productCard);
    });
}

function deleteProduct(index) {
    products.splice(index, 1);  
    localStorage.setItem('products', JSON.stringify(products)); 
    displayProducts(); 
}

const handleSort = (orderBy) => {
    let sortedProducts;
    if (orderBy === "lth") {
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else {
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts); 
};

const handleCategory = (category) => {
    let filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts); 
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));
document.getElementById("men").addEventListener("click", () => handleCategory("men"));
document.getElementById("women").addEventListener("click", () => handleCategory("women"));
document.getElementById("electronics").addEventListener("click", () => handleCategory("electronics"));

displayProducts();
