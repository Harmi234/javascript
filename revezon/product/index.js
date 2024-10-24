let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];


const addProduct = (title, price, category, img) => {
    let newProduct = { id: Date.now(), title, price, category, img };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts(products); 
};

document.getElementById("productData").addEventListener("submit", function (e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let img = document.getElementById("image").value;

    addProduct(title, price, category, img);
    document.getElementById("productData").reset();
});

const isExist = (id) => {
    let flag = false;
    cart.map((ele, i) => {
        if (ele.id == id) {
            cart[i].qty += 1; 
            flag = true;
            alert("Quantity updated");
        }
    });
    return flag;
};

const handleCart = (ele) => {
    if (!isExist(ele.id)) {
        cart.push({
            id: ele.id,
            name: ele.name,
            price: ele.price,
            qty: 1
        });
        alert("Product added to cart");
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
};



const deleteProduct = (id) => {
    products = products.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts(products); 
};

const displayProducts = (data) => {
    let productList = document.getElementById("productList");
    productList.innerHTML = ""; 

    data.map((ele) => {
        let div = document.createElement("div");
        div.classList.add("product-item");

        let img = document.createElement("img");
        img.src = ele.img;
        img.alt = ele.title;

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let price = document.createElement("p");
        price.innerHTML = `Price: ₹${ele.price}`;

        let category = document.createElement("p");
        category.innerHTML = `Category: ${ele.category}`;

        let buyBtn = document.createElement("button");
        buyBtn.innerHTML = "Buy";
        buyBtn.addEventListener("click", () => handleCart(ele)); 

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => deleteProduct(ele.id));

        div.append(img, title, price, category, buyBtn, deleteBtn);
        productList.append(div);
    });
};

const displayCart = () => {
    let cartContainer = document.getElementById("cartList");
    cartContainer.innerHTML = ""; 

    if (cart.length === 0) {
        cartContainer.innerHTML = "Your cart is empty.";
        return;
    }

    cart.map((item, index) => {
        let div = document.createElement("div");
        div.classList.add("cart-item");

        let img = document.createElement("img");
        img.src = item.img; 
        img.alt = item.title;

        let title = document.createElement("h4");
        title.innerHTML = `${item.title} `;

        let price = document.createElement("p");
        const itemTotal = item.price * item.qty; 
        price.innerHTML = `Price: ${itemTotal}`;

        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.addEventListener("click", () => removeFromCart(index)); 

        div.append(img, title, price, removeBtn);
        cartContainer.append(div);
    });
};

const removeFromCart = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); 
    displayCart(); 
};

displayProducts(products);
displayCart();
