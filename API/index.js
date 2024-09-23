
console.log("starting");
const getData = async () => {
    let req = await fetch ("https://fakestoreapi.com/products");
    let res = await req.json();
    console.log(res);
    mapper(res)
}

getData();

console.log("getting data");
console.log("ending");

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
        price.innerHTML = `Price: $${item.price}`;

        let description = document.createElement("p");
        description.innerHTML = item.description;

        let category = document.createElement("p");
        category.innerHTML = `Category: ${item.category}`;

        let rating = document.createElement("p");
        rating.innerHTML = `Rating: ${item.rating.rate} / 5 (${item.rating.count} reviews)`;

        productContainer.append(title, img, price, description, category, rating);

        document.getElementById("productList").append(productContainer);
    });
};

