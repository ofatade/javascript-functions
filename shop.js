// Simulated product database
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 4, name: "Headphones", price: 100 }
];

// Task 1 user login status
let isLoggedIn = true; // Change to false to simulate a logged-out user

//Task 2 User's shopping cart
let cart = [];

// Function to display available products
function displayProducts() {
    console.log("Available Products:");
    for (let i = 0; i < products.length; i++) {
        console.log(`${products[i].id}. ${products[i].name} - $${products[i].price}`);
    }
}

// Function to add product to cart
function addToCart(productId) {
    if (!isLoggedIn) {
        console.log("You must be logged in to add items to the cart.");
        return;
    }

    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(`${product.name} has been added to your cart.`);
    } else {
        console.log("Product not found.");
    }
}

// Task 3 Function to calculate total cost of items in the cart
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}

// Display products to the user
displayProducts();

// Simulate adding items to the cart
addToCart(1);
addToCart(2);
addToCart(5); // Trying to add a non-existing product

// Calculate and display the total cost
const totalCost = calculateTotal();
console.log(`Total cost of items in your cart: $${totalCost}`);
