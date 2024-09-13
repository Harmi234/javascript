import Navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

// cart.js

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to render the cart
const renderCart = () => {
  const cartBody = document.getElementById("cart-body");
  let totalPrice = 0;

  cartBody.innerHTML = ""; 
  cart.forEach((item, index) => {
    let tr = document.createElement("tr");

    // Product Image
    let td1 = document.createElement("td");
    let img = document.createElement("img");
    img.src = item.img; // Assuming you have an `img` field in the product object
    img.alt = item.title;
    img.style.width = "100px"; // Set the width for image
    td1.appendChild(img);

    // Product Title
    let td2 = document.createElement("td");
    td2.textContent = item.title;

    // Product Price
    let td3 = document.createElement("td");
    td3.textContent = `$${item.price}`;

    // Quantity with increase and decrease buttons
    let td4 = document.createElement("td");
    let qtyContainer = document.createElement("div");
    let decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "-";
    decreaseBtn.addEventListener("click", () => updateQuantity(index, -1));

    let increaseBtn = document.createElement("button");
    increaseBtn.textContent = "+";
    increaseBtn.addEventListener("click", () => updateQuantity(index, 1));

    let qtyDisplay = document.createElement("span");
    qtyDisplay.textContent = item.qty;
    
    qtyContainer.append(decreaseBtn, qtyDisplay, increaseBtn);
    td4.appendChild(qtyContainer);

    // Total Price for the product
    let td5 = document.createElement("td");
    let total = item.price * item.qty;
    td5.textContent = `$${total}`;

    // Remove button
    let td6 = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeFromCart(index));
    td6.appendChild(removeButton);

    tr.append(td1, td2, td3, td4, td5, td6);
    cartBody.appendChild(tr);

    totalPrice += total;
  });

  document.getElementById("total-price").textContent = `Total Price: $${totalPrice}`;
};

const updateQuantity = (index, change) => {
  if (cart[index].qty + change > 0) {
    cart[index].qty += change;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(); 
};

const removeFromCart = (index) => {
  cart.splice(index, 1); 
  localStorage.setItem("cart", JSON.stringify(cart)); 
  renderCart(); 
};

renderCart();