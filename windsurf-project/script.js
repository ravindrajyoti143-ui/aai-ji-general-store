// Product Database
const products = {
    grains: [
        { id: 1, name: "Basmati Rice", price: 120, unit: "1kg", image: "rice.jpg" },
        { id: 2, name: "Wheat Atta", price: 45, unit: "1kg", image: "atta.jpg" },
        { id: 3, name: "Maida", price: 40, unit: "1kg", image: "maida.jpg" },
        { id: 4, name: "Sooji/Rava", price: 50, unit: "1kg", image: "sooji.jpg" },
        { id: 5, name: "Poha", price: 35, unit: "500g", image: "poha.jpg" },
        { id: 6, name: "Besan", price: 80, unit: "1kg", image: "besan.jpg" }
    ],
    dals: [
        { id: 7, name: "Toor Dal", price: 100, unit: "1kg", image: "toor.jpg" },
        { id: 8, name: "Moong Dal", price: 120, unit: "1kg", image: "moong.jpg" },
        { id: 9, name: "Masoor Dal", price: 85, unit: "1kg", image: "masoor.jpg" },
        { id: 10, name: "Chana Dal", price: 90, unit: "1kg", image: "chana.jpg" },
        { id: 11, name: "Urad Dal", price: 110, unit: "1kg", image: "urad.jpg" },
        { id: 12, name: "Rajma", price: 130, unit: "1kg", image: "rajma.jpg" },
        { id: 13, name: "Kabuli Chana", price: 140, unit: "1kg", image: "kabuli.jpg" }
    ],
    oil: [
        { id: 14, name: "Sunflower Oil", price: 150, unit: "1L", image: "sunflower.jpg" },
        { id: 15, name: "Mustard Oil", price: 140, unit: "1L", image: "mustard.jpg" },
        { id: 16, name: "Groundnut Oil", price: 180, unit: "1L", image: "groundnut.jpg" },
        { id: 17, name: "Refined Oil", price: 120, unit: "1L", image: "refined.jpg" },
        { id: 18, name: "Ghee", price: 450, unit: "1kg", image: "ghee.jpg" },
        { id: 19, name: "Butter", price: 50, unit: "100g", image: "butter.jpg" }
    ],
    spices: [
        { id: 20, name: "Turmeric Powder", price: 80, unit: "200g", image: "turmeric.jpg" },
        { id: 21, name: "Red Chilli Powder", price: 60, unit: "200g", image: "chilli.jpg" },
        { id: 22, name: "Coriander Powder", price: 70, unit: "200g", image: "coriander.jpg" },
        { id: 23, name: "Garam Masala", price: 90, unit: "100g", image: "garam.jpg" },
        { id: 24, name: "Jeera (Cumin)", price: 120, unit: "200g", image: "jeera.jpg" },
        { id: 25, name: "Mustard Seeds", price: 60, unit: "200g", image: "mustard_seeds.jpg" },
        { id: 26, name: "Salt", price: 20, unit: "1kg", image: "salt.jpg" }
    ],
    snacks: [
        { id: 27, name: "Parle-G Biscuits", price: 10, unit: "pack", image: "parleg.jpg" },
        { id: 28, name: "Marie Gold", price: 20, unit: "pack", image: "marie.jpg" },
        { id: 29, name: "Lays Chips", price: 20, unit: "pack", image: "lays.jpg" },
        { id: 30, name: "Kurkure", price: 15, unit: "pack", image: "kurkure.jpg" },
        { id: 31, name: "Maggi Noodles", price: 14, unit: "pack", image: "maggi.jpg" },
        { id: 32, name: "Samosa", price: 15, unit: "piece", image: "samosa.jpg" },
        { id: 33, name: "Namkeen Mixture", price: 40, unit: "200g", image: "mixture.jpg" }
    ],
    beverages: [
        { id: 34, name: "Tea Powder", price: 120, unit: "250g", image: "tea.jpg" },
        { id: 35, name: "Coffee Powder", price: 150, unit: "100g", image: "coffee.jpg" },
        { id: 36, name: "Coca Cola", price: 40, unit: "1L", image: "coke.jpg" },
        { id: 37, name: "Sprite", price: 40, unit: "1L", image: "sprite.jpg" },
        { id: 38, name: "Maza", price: 35, unit: "1L", image: "maza.jpg" },
        { id: 39, name: "Frooti", price: 25, unit: "1L", image: "frooti.jpg" },
        { id: 40, name: "Tetra Pack Milk", price: 60, unit: "1L", image: "tetra.jpg" }
    ],
    dairy: [
        { id: 41, name: "Fresh Milk", price: 56, unit: "1L", image: "milk.jpg" },
        { id: 42, name: "Curd", price: 40, unit: "500g", image: "curd.jpg" },
        { id: 43, name: "Paneer", price: 120, unit: "200g", image: "paneer.jpg" },
        { id: 44, name: "Cheese", price: 150, unit: "200g", image: "cheese.jpg" },
        { id: 45, name: "Buttermilk", price: 20, unit: "1L", image: "buttermilk.jpg" }
    ],
    personal: [
        { id: 46, name: "Lifebuoy Soap", price: 35, unit: "piece", image: "lifebuoy.jpg" },
        { id: 47, name: "Dove Soap", price: 45, unit: "piece", image: "dove.jpg" },
        { id: 48, name: "Head & Shoulders", price: 120, unit: "200ml", image: "h&s.jpg" },
        { id: 49, name: "Colgate Toothpaste", price: 80, unit: "100g", image: "colgate.jpg" },
        { id: 50, name: "Pepsodent", price: 60, unit: "100g", image: "pepsodent.jpg" },
        { id: 51, name: "Hair Oil", price: 45, unit: "100ml", image: "hair_oil.jpg" },
        { id: 52, name: "Face Wash", price: 90, unit: "50ml", image: "facewash.jpg" }
    ],
    household: [
        { id: 53, name: "Surf Excel", price: 180, unit: "1kg", image: "surf.jpg" },
        { id: 54, name: "Ariel", price: 200, unit: "1kg", image: "ariel.jpg" },
        { id: 55, name: "Vim Dishwash", price: 85, unit: "500ml", image: "vim.jpg" },
        { id: 56, name: "Harpic", price: 120, unit: "1L", image: "harpic.jpg" },
        { id: 57, name: "Phenyl", price: 60, unit: "1L", image: "phenyl.jpg" },
        { id: 58, name: "Garbage Bags", price: 40, unit: "10 pcs", image: "garbage.jpg" },
        { id: 59, name: "Broom", price: 80, unit: "piece", image: "broom.jpg" }
    ]
};

// Shopping Cart
let cart = [];
let currentCategory = 'all';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('all');
    updateCartUI();
    
    // Event Listeners
    document.getElementById('cartBtn').addEventListener('click', showCart);
    document.getElementById('checkoutBtn').addEventListener('click', proceedToCheckout);
    document.getElementById('confirmOrderBtn').addEventListener('click', confirmOrder);
    document.getElementById('searchInput').addEventListener('input', searchProducts);
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            loadProducts(currentCategory);
        });
    });
});

// Load products based on category
function loadProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    let productsToShow = [];
    
    if (category === 'all') {
        Object.keys(products).forEach(cat => {
            productsToShow = productsToShow.concat(products[cat]);
        });
    } else {
        productsToShow = products[category] || [];
    }
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<div class="col-12 text-center"><p>No products found in this category.</p></div>';
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6';
    
    col.innerHTML = `
        <div class="card product-card h-100">
            <img src="https://picsum.photos/seed/${product.name}/300/200.jpg" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">
                    <span class="price">₹${product.price}</span>
                    <span class="unit">${product.unit}</span>
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="quantity-controls">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${product.id}, -1)">-</button>
                        <span class="quantity-display" id="qty-${product.id}">0</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${product.id}, 1)">+</button>
                    </div>
                    <button class="btn btn-success btn-sm" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Update quantity display
function updateQuantity(productId, change) {
    const qtyDisplay = document.getElementById(`qty-${productId}`);
    let currentQty = parseInt(qtyDisplay.textContent);
    let newQty = Math.max(0, currentQty + change);
    qtyDisplay.textContent = newQty;
}

// Add to cart
function addToCart(productId) {
    const qtyDisplay = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(qtyDisplay.textContent);
    
    if (quantity === 0) {
        alert('Please select quantity first');
        return;
    }
    
    const product = findProduct(productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    // Reset quantity display
    qtyDisplay.textContent = '0';
    
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

// Find product by ID
function findProduct(productId) {
    for (let category in products) {
        const product = products[category].find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show cart modal
function showCart() {
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    displayCartItems();
    cartModal.show();
}

// Display cart items
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="text-center text-muted">Your cart is empty</p>';
        updateOrderSummary(0);
        return;
    }
    
    let html = '<div class="table-responsive"><table class="table"><thead><tr><th>Item</th><th>Price</th><th>Qty</th><th>Total</th><th>Action</th></tr></thead><tbody>';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        html += `
            <tr>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                </td>
                <td>₹${itemTotal}</td>
                <td><button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button></td>
            </tr>
        `;
    });
    
    html += '</tbody></table></div>';
    cartItemsDiv.innerHTML = html;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    updateOrderSummary(subtotal);
}

// Update cart quantity
function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            displayCartItems();
            updateCartUI();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCartItems();
    updateCartUI();
}

// Update order summary
function updateOrderSummary(subtotal) {
    const subtotalElement = document.getElementById('subtotal');
    const totalAmountElement = document.getElementById('totalAmount');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const orderAlert = document.getElementById('orderAlert');
    
    subtotalElement.textContent = `₹${subtotal}`;
    totalAmountElement.textContent = `₹${subtotal}`;
    
    // Check minimum order condition
    if (subtotal < 500) {
        orderAlert.className = 'alert alert-warning';
        orderAlert.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Minimum order amount is ₹500. Add ₹${500 - subtotal} more to place order.`;
        checkoutBtn.disabled = true;
    } else {
        orderAlert.className = 'alert alert-success';
        orderAlert.innerHTML = '<i class="fas fa-check-circle"></i> Order eligible for free delivery!';
        checkoutBtn.disabled = false;
    }
}

// Proceed to checkout
function proceedToCheckout() {
    const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    cartModal.hide();
    
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
}

// Confirm order
function confirmOrder() {
    const form = document.getElementById('checkoutForm');
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Generate order ID
    const orderId = 'ORD' + Date.now();
    document.getElementById('orderId').textContent = orderId;
    
    // Get form data
    const orderData = {
        orderId: orderId,
        customerName: document.getElementById('customerName').value,
        customerPhone: document.getElementById('customerPhone').value,
        deliveryAddress: document.getElementById('deliveryAddress').value,
        deliveryArea: document.getElementById('deliveryArea').value,
        orderNotes: document.getElementById('orderNotes').value,
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
        items: cart,
        totalAmount: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderTime: new Date().toISOString()
    };
    
    // Save order to localStorage (in real app, this would go to a database)
    let orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Close checkout modal
    const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    checkoutModal.hide();
    
    // Show success modal
    const successModal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));
    successModal.show();
    
    // Clear cart
    cart = [];
    updateCartUI();
    
    // Reset form
    form.reset();
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('.card-title').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3';
    notification.style.zIndex = '9999';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
