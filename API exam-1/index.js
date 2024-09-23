let productsData = [];  
let filteredProducts = []; 

console.log("starting");

const getData = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();
    productsData = res.products; 
    filteredProducts = productsData; 
    mapper(filteredProducts);
};

getData();

console.log("setting stat");

const mapper = (data) => {
    const productList = document.getElementById("productList");
    productList.innerHTML = ''; 

    data.map((item) => {
        let productContainer = document.createElement("div");
        productContainer.className = "product";

        let title = document.createElement("h2");
        title.innerHTML = item.title;

        let img = document.createElement("img");
        img.src = item.thumbnail;  
        img.alt = item.title;

        let price = document.createElement("p");
        price.innerHTML = `Price: $${item.price}`;

        let category = document.createElement("p");
        category.innerHTML = `Category: ${item.category}`;

        let rating = document.createElement("p");
        rating.innerHTML = `Rating: ${item.rating}`;

        let brand = document.createElement("p");
        brand.innerHTML = `Brand: ${item.brand}`;

        productContainer.append(title, img, price, category, rating, brand);
        productList.append(productContainer);
    });
};

// Search
document.getElementById("searchInput").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filteredProducts = productsData.filter(item => item.title.toLowerCase().includes(searchTerm));
    mapper(filteredProducts);
});

// Sorting
const handleSort = (orderBy) => {
    let sortedData = [...filteredProducts];
    if (orderBy == "price") {
        sortedData.sort((a, b) => a.price - b.price);
    } else if (orderBy == "rating") {
        sortedData.sort((a, b) => b.rating - a.rating);
    } else if (orderBy == "title") {
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
    }
    mapper(sortedData);
};

// Filtering
const handleFilter = (category) => {
    if (category) {
        filteredProducts = productsData.filter((ele) => ele.category == category);
    } else {
        filteredProducts = productsData;
    }
    mapper(filteredProducts);
};

document.getElementById("sortSelect").addEventListener("change", (e) => {
    handleSort(e.target.value);
});
document.getElementById("filterSelect").addEventListener("change", (e) => {
    handleFilter(e.target.value);
});

console.log("ending");
