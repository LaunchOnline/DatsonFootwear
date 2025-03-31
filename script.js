// Product data
const products = [
    {
        id: 1,
        name: "Steel Toe Safety Boot",
        description: "Premium steel toe protection with superior comfort and durability.",
        image: "assets/productImages/product1.jpg",
        price: "₹2,499"
    },
    {
        id: 2,
        name: "Composite Toe Work Boot",
        description: "Lightweight composite toe protection with electrical hazard rating.",
        image: "assets/productImages/product2.jpg",
        price: "₹2,999"
    },
    {
        id: 3,
        name: "Waterproof Safety Shoe",
        description: "Waterproof safety shoes with slip-resistant sole and steel toe.",
        image: "assets/productImages/product3.jpg",
        price: "₹3,499"
    }
];

// Function to create product cards
function createProductCards() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        
        col.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Price: ${product.price}</strong></p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        `;
        
        productList.appendChild(col);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createProductCards();
});