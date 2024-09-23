console.log("starting");

const getData = async () => {
        let req = await fetch("https://dummyjson.com/products");
        let res = await req.json();
        console.log(res);
        mapper(res.products); 
};

getData();

console.log("setting stat");

const mapper = (data) => {
    data.map((item) => {
        let productContainer = document.createElement("div");
        productContainer.className = "product";

        let title = document.createElement("h2");
        title.innerHTML = item.title;

        let img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;

        let price = document.createElement("p");
        price.innerHTML = `Price: ${item.price}`;

        let category = document.createElement("p");
        category.innerHTML = `Category: ${item.category}`;

        let rating = document.createElement("p");
        rating.innerHTML = `Rating: ${item.rating}`;

        let brand = document.createElement("brand");
        brand.innerHTML = item.brand;

        let discountPercentage = document.createElement("discountPercentage");
        discountPercentage.innerHTML = item.discountPercentage;



        productContainer.append(title, img, price, category, rating,brand);
        document.getElementById("productList").append(productContainer);
    });
};

console.log("ending");
