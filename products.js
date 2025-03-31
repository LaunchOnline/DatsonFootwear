// Global products array
let products = [];
let currentFilteredProducts = []; // Add this to track currently filtered products
let currentSearchQuery = ''; // Add this to track current search query

// Function to fetch products from JSON file
async function fetchProducts() {
    try {
        const response = await fetch('product.json');
        const data = await response.json();
        products = data.products;
        currentFilteredProducts = [...products]; // Initialize with all products
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to create product cards
function createProductCard(product) {
    // Add error checking for required properties
    if (!product) {
        console.error('Invalid product data:', product);
        return '';
    }

    // Set default values for optional properties
    const type = product.type || 'Standard';
    const productType = product.product_type || 'Safety Shoe';
    const article = product.article || 'N/A';
    const toeCap = product.toe_cap || 'Standard';
    const image = product.image || 'assets/productImages/sh_p_001';

    return `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div class="card animate-fade-in h-100" data-category="${productType.toLowerCase()}">
                <div class="card-img-wrapper">
                    <img src="${image}.png" class="card-img-top" alt="${article}" onerror="this.src='assets/productImages/sh_p_001.png'">
                    <div class="card-overlay">
                        <button class="btn btn-light" onclick="showProductDetails('${article}')">
                            <i class="fas fa-eye"></i> Quick View
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${article}</h5>
                    <p class="card-text">${productType} - ${type}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-primary">${toeCap}</span>
                        <button class="btn btn-primary" onclick="showProductDetails('${article}')">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to show product details in modal
function showProductDetails(article) {
    const product = products.find(p => p.article === article);
    if (!product) {
        console.error('Product not found:', article);
        return;
    }

    // Set default values for optional properties
    const type = product.type || 'Standard';
    const productType = product.product_type || 'Safety Shoe';
    const toeCap = product.toe_cap || 'Standard';
    const density = product.density || 'Standard';
    const image = product.image || 'assets/productImages/sh_p_001';
    const features = product.features || [];
    const brand = product.brand || 'Datson Footwears';
    const certification = product.certification || 'ISO 9001:2015 Certified Company';
    const sole = product.sole || 'Standard';
    const upper = product.upper || 'Standard';
    const size = product.size || 'N/A';

    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'productModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${article} - ${productType}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${image}.png" class="img-fluid rounded" alt="${article}" onerror="this.src='assets/productImages/sh_p_001.png'">
                        </div>
                        <div class="col-md-6">
                            <p class="lead">${type} Safety Shoe</p>
                            <div class="mb-4">
                                <span class="badge bg-primary me-2">${toeCap}</span>
                                <span class="badge bg-secondary">${density}</span>
                            </div>
                            

                            <h6 class="mt-4 mb-3">Specifications:</h6>
                            <table class="table table-sm">
                                <tr>
                                    <th>Article:</th>
                                    <td>${article}</td>
                                </tr>
                                <tr>
                                    <th>Brand:</th>
                                    <td>${brand}</td>
                                </tr>
                                <tr>
                                    <th>Certification:</th>
                                    <td>${certification}</td>
                                </tr>
                                <tr>
                                    <th>Product Type:</th>
                                    <td>${productType}</td>
                                </tr>
                                <tr>
                                    <th>Sole:</th>
                                    <td>${sole}</td>
                                </tr>
                                <tr>
                                    <th>Upper:</th>
                                    <td>${upper}</td>
                                </tr>
                                <tr>
                                    <th>Type:</th>
                                    <td>${type}</td>
                                </tr>
                                <tr>
                                    <th>Size Range:</th>
                                    <td>${size}</td>
                                </tr>
                            </table>

                            <h6 class="mb-3">Features:</h6>
                            <ul class="list-unstyled">
                                ${features.map(feature => `
                                    <li class="mb-2">
                                        <i class="fas fa-check text-success me-2"></i>${feature}
                                    </li>
                                `).join('')}
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Contact for Order</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

// Function to filter products
function filterProducts(category) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    // Filter products based on category
    currentFilteredProducts = category === 'all' 
        ? products 
        : products.filter(product => {
            // Handle different category cases
            switch(category) {
                case 'safety-shoes':
                    return product.product_type.toLowerCase().includes('safety shoe');
                case 'gumboots':
                    return product.product_type.toLowerCase().includes('gumboot');
                default:
                    return true;
            }
        });

    // Apply current search query if exists
    if (currentSearchQuery) {
        searchProducts(currentSearchQuery);
    } else {
        // Clear the grid
        productGrid.innerHTML = '';

        // Add filtered products to the grid
        if (currentFilteredProducts.length > 0) {
            currentFilteredProducts.forEach(product => {
                productGrid.innerHTML += createProductCard(product);
            });
        } else {
            productGrid.innerHTML = `
                <div class="col-12 text-center">
                    <p class="text-muted">No products found in this category.</p>
                </div>
            `;
        }
    }
}

// Function to search products
function searchProducts(query) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    currentSearchQuery = query; // Store the current search query
    query = query.toLowerCase();
    
    // Filter products based on search query within current filtered products
    const searchResults = currentFilteredProducts.filter(product => {
        const article = product.article.toLowerCase();
        return article.includes(query);
    });

    // Clear the grid
    productGrid.innerHTML = '';

    // Add search results to the grid
    if (searchResults.length > 0) {
        searchResults.forEach(product => {
            productGrid.innerHTML += createProductCard(product);
        });
    } else {
        productGrid.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">No products found matching article number "${query}" in this category.</p>
            </div>
        `;
    }
}

// Function to get unique product types
function getUniqueProductTypes(products) {
    const types = new Set(products.map(product => product.product_type || 'Safety Shoe'));
    return Array.from(types);
}

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to set active filter
function setActiveFilter(category) {
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    filterButtons.forEach(button => {
        if (button.getAttribute('data-category') === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Function to display all products
function displayProducts(products) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    // Clear the grid
    productGrid.innerHTML = '';

    // Add all products to the grid
    if (products.length > 0) {
        products.forEach(product => {
            productGrid.innerHTML += createProductCard(product);
        });
    } else {
        productGrid.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">No products found.</p>
            </div>
        `;
    }
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', async () => {
    const productGrid = document.getElementById('product-grid');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelector('.filter-buttons');

    // Show loading spinner
    productGrid.innerHTML = `
        <div class="col-12 text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;

    try {
        // Fetch products
        products = await fetchProducts();
        
        // Generate filter buttons with fixed categories
        filterButtons.innerHTML = `
            <button class="btn btn-outline-primary me-2 mb-2 active" data-category="all">All Products</button>
            <button class="btn btn-outline-primary me-2 mb-2" data-category="safety-shoes">Safety Shoes</button>
            <button class="btn btn-outline-primary me-2 mb-2" data-category="gumboots">Gumboots</button>
        `;

        // Get category from URL parameter
        const categoryParam = getUrlParameter('category');
        if (categoryParam) {
            if (categoryParam === 'ladies-safety') {
                // If ladies safety is selected, set the search query
                searchInput.value = 'ladies';
                searchProducts('ladies');
            } else {
                setActiveFilter(categoryParam);
                filterProducts(categoryParam);
            }
        } else {
            displayProducts(products);
        }

        // Add event listeners
        filterButtons.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                const category = e.target.getAttribute('data-category');
                setActiveFilter(category);
                filterProducts(category);
            }
        });

        searchInput.addEventListener('input', (e) => {
            searchProducts(e.target.value);
        });

    } catch (error) {
        console.error('Error loading products:', error);
        productGrid.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-danger">Error loading products. Please try again later.</p>
            </div>
        `;
    }
}); 