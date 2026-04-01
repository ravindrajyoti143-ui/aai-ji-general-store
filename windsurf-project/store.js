// Store Frontend JavaScript

let products = [];
let cart = [];
let settings = {};
let deliveryAreas = [];
let currentCategory = 'all';

// Initialize the store
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    loadProducts();
    updateCartUI();
    
    // Event listeners
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
            displayProducts(currentCategory);
        });
    });
});

// Load data from localStorage
function loadData() {
    // Load products
    const savedProducts = localStorage.getItem('storeProducts');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
    }
    
    // Load settings
    const savedSettings = localStorage.getItem('storeSettings');
    if (savedSettings) {
        settings = JSON.parse(savedSettings);
        updateStoreInfo();
    } else {
        // Default settings
        settings = {
            storeName: 'Aai Ji General Store',
            storePhone: '+91 98765 43210',
            storeEmail: 'store@example.com',
            storeAddress: 'Main Road, Your City, PIN: 123456',
            minOrderAmount: 500,
            deliveryRadius: 5
        };
        updateStoreInfo();
    }
    
    // Load delivery areas
    const savedAreas = localStorage.getItem('deliveryAreas');
    if (savedAreas) {
        deliveryAreas = JSON.parse(savedAreas);
        populateDeliveryAreas();
    } else {
        // Default delivery areas
        deliveryAreas = [
            { id: 1, name: 'Main Road', range: '0-2km', code: 'main_road' },
            { id: 2, name: 'Colony Area 1', range: '2-3km', code: 'colony_1' },
            { id: 3, name: 'Colony Area 2', range: '3-4km', code: 'colony_2' },
            { id: 4, name: 'Outskirts', range: '4-5km', code: 'outskirts' }
        ];
        populateDeliveryAreas();
    }
}

// Update store information on the page
function updateStoreInfo() {
    document.getElementById('storeName').textContent = settings.storeName || 'Aai Ji General Store';
    document.getElementById('storePhone').textContent = settings.storePhone || '+91 98765 43210';
    document.getElementById('minOrderAmount').textContent = settings.minOrderAmount || 500;
    document.getElementById('deliveryRadius').textContent = settings.deliveryRadius || 5;
    document.getElementById('deliveryRadiusText').textContent = settings.deliveryRadius || 5;
    document.getElementById('footerStoreName').textContent = settings.storeName || 'Aai Ji General Store';
    document.getElementById('footerPhone').textContent = settings.storePhone || '+91 98765 43210';
    document.getElementById('footerEmail').textContent = settings.storeEmail || 'store@example.com';
    document.getElementById('copyrightStoreName').textContent = settings.storeName || 'Aai Ji General Store';
}

// Populate delivery areas in checkout form
function populateDeliveryAreas() {
    const deliveryAreaSelect = document.getElementById('deliveryArea');
    if (!deliveryAreaSelect) return;
    
    let html = '<option value="">Select your area</option>';
    deliveryAreas.forEach(area => {
        html += `<option value="${area.code}">${area.name} (${area.range})</option>`;
    });
    deliveryAreaSelect.innerHTML = html;
}

// Load products
function loadProducts() {
    // Show loading state
    document.getElementById('loadingState').style.display = 'block';
    document.getElementById('productsGrid').innerHTML = '';
    document.getElementById('emptyState').style.display = 'none';
    
    // Simulate loading delay
    setTimeout(() => {
        displayProducts('all');
        document.getElementById('loadingState').style.display = 'none';
    }, 1000);
}

// Display products based on category
function displayProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');
    
    let productsToShow = [];
    
    if (category === 'all') {
        productsToShow = products.filter(p => p.active !== false);
    } else {
        productsToShow = products.filter(p => p.category === category && p.active !== false);
    }
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6';
    
    const stockStatus = getStockStatusBadge(product);
    const isOutOfStock = product.stock === 0;
    
    col.innerHTML = `
        <div class="card product-card h-100 ${isOutOfStock ? 'out-of-stock' : ''}">
            <div class="product-image-container">
                <img src="${product.image || 'https://picsum.photos/seed/' + product.name + '/300/200.jpg'}" 
                     class="card-img-top product-image" 
                     alt="${product.name}"
                     onerror="this.src='https://picsum.photos/seed/default/300/200.jpg'">
                ${stockStatus}
            </div>
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                ${product.description ? `<p class="card-text small text-muted">${product.description}</p>` : ''}
                <div class="product-price">
                    <span class="price">₹${product.price}</span>
                    <span class="unit">${product.unit}</span>
                </div>
                <div class="product-stock">
                    <small class="text-muted">Stock: ${product.stock} ${product.unit}</small>
                </div>
                <div class="quantity-controls mt-2">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${product.id}, -1)" ${isOutOfStock ? 'disabled' : ''}>-</button>
                    <span class="quantity-display" id="qty-${product.id}">0</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${product.id}, 1)" ${isOutOfStock ? 'disabled' : ''}>+</button>
                </div>
                <button class="btn btn-success btn-sm w-100 mt-2" onclick="addToCart(${product.id})" ${isOutOfStock ? 'disabled' : ''}>
                    <i class="fas fa-cart-plus"></i> ${isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Get stock status badge
function getStockStatusBadge(product) {
    if (product.stock === 0) {
        return '<span class="badge bg-danger position-absolute top-0 end-0 m-2">Out of Stock</span>';
    } else if (product.stock <= product.minStock) {
        return '<span class="badge bg-warning position-absolute top-0 end-0 m-2">Low Stock</span>';
    }
    return '';
}

// Update quantity display
function updateQuantity(productId, change) {
    const qtyDisplay = document.getElementById(`qty-${productId}`);
    if (!qtyDisplay) return;
    
    let currentQty = parseInt(qtyDisplay.textContent);
    let newQty = Math.max(0, currentQty + change);
    
    // Check stock availability
    const product = products.find(p => p.id === productId);
    if (product && newQty > product.stock) {
        showNotification(`Only ${product.stock} ${product.unit} available`, 'warning');
        return;
    }
    
    qtyDisplay.textContent = newQty;
}

// Add to cart
function addToCart(productId) {
    const qtyDisplay = document.getElementById(`qty-${productId}`);
    if (!qtyDisplay) return;
    
    const quantity = parseInt(qtyDisplay.textContent);
    
    if (quantity === 0) {
        showNotification('Please select quantity first', 'warning');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check stock
    if (quantity > product.stock) {
        showNotification(`Only ${product.stock} ${product.unit} available`, 'warning');
        return;
    }
    
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
    showNotification(`${product.name} added to cart!`, 'success');
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
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${item.image || 'https://picsum.photos/seed/' + item.name + '/50/50.jpg'}" 
                             alt="${item.name}" 
                             class="me-2" 
                             style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px;"
                             onerror="this.src='https://picsum.photos/seed/default/50/50.jpg'">
                        <div>
                            <strong>${item.name}</strong>
                            <br><small class="text-muted">${item.unit}</small>
                        </div>
                    </div>
                </td>
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
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    // Check stock availability
    const product = products.find(p => p.id === productId);
    if (product && newQuantity > product.stock) {
        showNotification(`Only ${product.stock} ${product.unit} available`, 'warning');
        return;
    }
    
    item.quantity = newQuantity;
    displayCartItems();
    updateCartUI();
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
    
    const minOrder = settings.minOrderAmount || 500;
    
    subtotalElement.textContent = `₹${subtotal}`;
    totalAmountElement.textContent = `₹${subtotal}`;
    
    // Check minimum order condition
    if (subtotal < minOrder) {
        orderAlert.className = 'alert alert-warning';
        orderAlert.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Minimum order amount is ₹${minOrder}. Add ₹${minOrder - subtotal} more to place order.`;
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
        items: [...cart],
        totalAmount: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderTime: new Date().toISOString(),
        status: 'pending'
    };
    
    // Save order to localStorage
    let orders = JSON.parse(localStorage.getItem('storeOrders') || '[]');
    orders.push(orderData);
    localStorage.setItem('storeOrders', JSON.stringify(orders));
    
    // Update stock
    updateStockAfterOrder();
    
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
    
    // Refresh products display
    displayProducts(currentCategory);
}

// Update stock after order
function updateStockAfterOrder() {
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (product) {
            product.stock = Math.max(0, product.stock - cartItem.quantity);
        }
    });
    
    // Save updated products
    localStorage.setItem('storeProducts', JSON.stringify(products));
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    let hasResults = false;
    productCards.forEach(card => {
        const productName = card.querySelector('.card-title').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.parentElement.style.display = 'block';
            hasResults = true;
        } else {
            card.parentElement.style.display = 'none';
        }
    });
    
    // Show/hide empty state
    const emptyState = document.getElementById('emptyState');
    if (!hasResults && searchTerm) {
        emptyState.style.display = 'block';
        emptyState.querySelector('h4').textContent = 'No products found';
        emptyState.querySelector('p').textContent = `No results for "${searchTerm}". Try different keywords.`;
    } else {
        emptyState.style.display = 'none';
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const alertClass = {
        'success': 'alert-success',
        'error': 'alert-danger',
        'warning': 'alert-warning',
        'info': 'alert-info'
    }[type] || 'alert-info';
    
    const notification = document.createElement('div');
    notification.className = `alert ${alertClass} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3`;
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

// Refresh products (for real-time updates)
function refreshProducts() {
    loadData();
    displayProducts(currentCategory);
    showNotification('Products refreshed', 'info');
}

// Auto refresh every 2 minutes
setInterval(refreshProducts, 120000);
