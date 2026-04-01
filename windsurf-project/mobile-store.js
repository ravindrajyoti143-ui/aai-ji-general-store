// Mobile Store JavaScript - Optimized for Android Phones

// Store Configuration
const storeConfig = {
    name: "Aai Ji Mini Mart",
    domain: "aaijiminimart.com",
    phone: "+91 98765 43210",
    email: "info@aaijiminimart.com",
    minOrderAmount: 500,
    deliveryRadius: 5
};

// Product Database
const products = {
    grains: [
        { id: 1, name: "Basmati Rice", price: 120, unit: "1kg", stock: 50, image: "https://picsum.photos/seed/rice/200/200.jpg" },
        { id: 2, name: "Wheat Atta", price: 45, unit: "1kg", stock: 30, image: "https://picsum.photos/seed/atta/200/200.jpg" },
        { id: 3, name: "Maida", price: 40, unit: "1kg", stock: 25, image: "https://picsum.photos/seed/maida/200/200.jpg" },
        { id: 4, name: "Sooji/Rava", price: 50, unit: "1kg", stock: 35, image: "https://picsum.photos/seed/sooji/200/200.jpg" },
        { id: 5, name: "Poha", price: 35, unit: "500g", stock: 40, image: "https://picsum.photos/seed/poha/200/200.jpg" },
        { id: 6, name: "Besan", price: 80, unit: "1kg", stock: 20, image: "https://picsum.photos/seed/besan/200/200.jpg" }
    ],
    dals: [
        { id: 7, name: "Toor Dal", price: 100, unit: "1kg", stock: 40, image: "https://picsum.photos/seed/toor/200/200.jpg" },
        { id: 8, name: "Moong Dal", price: 120, unit: "1kg", stock: 35, image: "https://picsum.photos/seed/moong/200/200.jpg" },
        { id: 9, name: "Masoor Dal", price: 85, unit: "1kg", stock: 30, image: "https://picsum.photos/seed/masoor/200/200.jpg" },
        { id: 10, name: "Chana Dal", price: 90, unit: "1kg", stock: 25, image: "https://picsum.photos/seed/chana/200/200.jpg" },
        { id: 11, name: "Urad Dal", price: 110, unit: "1kg", stock: 20, image: "https://picsum.photos/seed/urad/200/200.jpg" },
        { id: 12, name: "Rajma", price: 130, unit: "1kg", stock: 15, image: "https://picsum.photos/seed/rajma/200/200.jpg" },
        { id: 13, name: "Kabuli Chana", price: 140, unit: "1kg", stock: 18, image: "https://picsum.photos/seed/kabuli/200/200.jpg" }
    ],
    oil: [
        { id: 14, name: "Sunflower Oil", price: 150, unit: "1L", stock: 30, image: "https://picsum.photos/seed/sunflower/200/200.jpg" },
        { id: 15, name: "Mustard Oil", price: 140, unit: "1L", stock: 25, image: "https://picsum.photos/seed/mustard/200/200.jpg" },
        { id: 16, name: "Groundnut Oil", price: 180, unit: "1L", stock: 20, image: "https://picsum.photos/seed/groundnut/200/200.jpg" },
        { id: 17, name: "Refined Oil", price: 120, unit: "1L", stock: 35, image: "https://picsum.photos/seed/refined/200/200.jpg" },
        { id: 18, name: "Ghee", price: 450, unit: "1kg", stock: 15, image: "https://picsum.photos/seed/ghee/200/200.jpg" },
        { id: 19, name: "Butter", price: 50, unit: "100g", stock: 40, image: "https://picsum.photos/seed/butter/200/200.jpg" }
    ],
    spices: [
        { id: 20, name: "Turmeric Powder", price: 80, unit: "200g", stock: 50, image: "https://picsum.photos/seed/turmeric/200/200.jpg" },
        { id: 21, name: "Red Chilli Powder", price: 60, unit: "200g", stock: 45, image: "https://picsum.photos/seed/chilli/200/200.jpg" },
        { id: 22, name: "Coriander Powder", price: 70, unit: "200g", stock: 40, image: "https://picsum.photos/seed/coriander/200/200.jpg" },
        { id: 23, name: "Garam Masala", price: 90, unit: "100g", stock: 30, image: "https://picsum.photos/seed/garam/200/200.jpg" },
        { id: 24, name: "Jeera (Cumin)", price: 120, unit: "200g", stock: 25, image: "https://picsum.photos/seed/jeera/200/200.jpg" },
        { id: 25, name: "Mustard Seeds", price: 60, unit: "200g", stock: 35, image: "https://picsum.photos/seed/mustard_seeds/200/200.jpg" },
        { id: 26, name: "Salt", price: 20, unit: "1kg", stock: 60, image: "https://picsum.photos/seed/salt/200/200.jpg" }
    ],
    snacks: [
        { id: 27, name: "Parle-G Biscuits", price: 10, unit: "pack", stock: 100, image: "https://picsum.photos/seed/parleg/200/200.jpg" },
        { id: 28, name: "Marie Gold", price: 20, unit: "pack", stock: 80, image: "https://picsum.photos/seed/marie/200/200.jpg" },
        { id: 29, name: "Lays Chips", price: 20, unit: "pack", stock: 80, image: "https://picsum.photos/seed/lays/200/200.jpg" },
        { id: 30, name: "Kurkure", price: 15, unit: "pack", stock: 70, image: "https://picsum.photos/seed/kurkure/200/200.jpg" },
        { id: 31, name: "Maggi Noodles", price: 14, unit: "pack", stock: 60, image: "https://picsum.photos/seed/maggi/200/200.jpg" },
        { id: 32, name: "Samosa", price: 15, unit: "piece", stock: 30, image: "https://picsum.photos/seed/samosa/200/200.jpg" },
        { id: 33, name: "Namkeen Mixture", price: 40, unit: "200g", stock: 25, image: "https://picsum.photos/seed/mixture/200/200.jpg" }
    ],
    beverages: [
        { id: 34, name: "Tea Powder", price: 120, unit: "250g", stock: 40, image: "https://picsum.photos/seed/tea/200/200.jpg" },
        { id: 35, name: "Coffee Powder", price: 150, unit: "100g", stock: 25, image: "https://picsum.photos/seed/coffee/200/200.jpg" },
        { id: 36, name: "Coca Cola", price: 40, unit: "1L", stock: 50, image: "https://picsum.photos/seed/coke/200/200.jpg" },
        { id: 37, name: "Sprite", price: 40, unit: "1L", stock: 45, image: "https://picsum.photos/seed/sprite/200/200.jpg" },
        { id: 38, name: "Maza", price: 35, unit: "1L", stock: 40, image: "https://picsum.photos/seed/maza/200/200.jpg" },
        { id: 39, name: "Frooti", price: 25, unit: "1L", stock: 35, image: "https://picsum.photos/seed/frooti/200/200.jpg" },
        { id: 40, name: "Tetra Pack Milk", price: 60, unit: "1L", stock: 20, image: "https://picsum.photos/seed/tetra/200/200.jpg" }
    ],
    dairy: [
        { id: 41, name: "Fresh Milk", price: 56, unit: "1L", stock: 20, image: "https://picsum.photos/seed/milk/200/200.jpg" },
        { id: 42, name: "Curd", price: 40, unit: "500g", stock: 25, image: "https://picsum.photos/seed/curd/200/200.jpg" },
        { id: 43, name: "Paneer", price: 120, unit: "200g", stock: 15, image: "https://picsum.photos/seed/paneer/200/200.jpg" },
        { id: 44, name: "Cheese", price: 150, unit: "200g", stock: 12, image: "https://picsum.photos/seed/cheese/200/200.jpg" },
        { id: 45, name: "Buttermilk", price: 20, unit: "1L", stock: 30, image: "https://picsum.photos/seed/buttermilk/200/200.jpg" }
    ],
    personal: [
        { id: 46, name: "Lifebuoy Soap", price: 35, unit: "piece", stock: 60, image: "https://picsum.photos/seed/lifebuoy/200/200.jpg" },
        { id: 47, name: "Dove Soap", price: 45, unit: "piece", stock: 40, image: "https://picsum.photos/seed/dove/200/200.jpg" },
        { id: 48, name: "Head & Shoulders", price: 120, unit: "200ml", stock: 30, image: "https://picsum.photos/seed/h&s/200/200.jpg" },
        { id: 49, name: "Colgate Toothpaste", price: 80, unit: "100g", stock: 35, image: "https://picsum.photos/seed/colgate/200/200.jpg" },
        { id: 50, name: "Pepsodent", price: 60, unit: "100g", stock: 30, image: "https://picsum.photos/seed/pepsodent/200/200.jpg" },
        { id: 51, name: "Hair Oil", price: 45, unit: "100ml", stock: 40, image: "https://picsum.photos/seed/hair_oil/200/200.jpg" },
        { id: 52, name: "Face Wash", price: 90, unit: "50ml", stock: 25, image: "https://picsum.photos/seed/facewash/200/200.jpg" }
    ],
    household: [
        { id: 53, name: "Surf Excel", price: 180, unit: "1kg", stock: 25, image: "https://picsum.photos/seed/surf/200/200.jpg" },
        { id: 54, name: "Ariel", price: 200, unit: "1kg", stock: 20, image: "https://picsum.photos/seed/ariel/200/200.jpg" },
        { id: 55, name: "Vim Dishwash", price: 85, unit: "500ml", stock: 35, image: "https://picsum.photos/seed/vim/200/200.jpg" },
        { id: 56, name: "Harpic", price: 120, unit: "1L", stock: 20, image: "https://picsum.photos/seed/harpic/200/200.jpg" },
        { id: 57, name: "Phenyl", price: 60, unit: "1L", stock: 30, image: "https://picsum.photos/seed/phenyl/200/200.jpg" },
        { id: 58, name: "Garbage Bags", price: 40, unit: "10 pcs", stock: 40, image: "https://picsum.photos/seed/garbage/200/200.jpg" },
        { id: 59, name: "Broom", price: 80, unit: "piece", stock: 15, image: "https://picsum.photos/seed/broom/200/200.jpg" }
    ]
};

// Global Variables
let cart = [];
let currentCategory = 'all';
let productQuantities = {};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize App
function initializeApp() {
    // Load saved data
    loadSavedData();
    
    // Display products
    displayProducts('all');
    
    // Update cart UI
    updateCartUI();
    
    // Hide loading state
    document.getElementById('loadingState').style.display = 'none';
    
    // Add touch optimizations
    addTouchOptimizations();
    
    // Add PWA features
    addPWAFeatures();
}

// Load saved data from localStorage
function loadSavedData() {
    const savedCart = localStorage.getItem('mobileStoreCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    const savedQuantities = localStorage.getItem('productQuantities');
    if (savedQuantities) {
        productQuantities = JSON.parse(savedQuantities);
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('mobileStoreCart', JSON.stringify(cart));
    localStorage.setItem('productQuantities', JSON.stringify(productQuantities));
}

// Display products
function displayProducts(category) {
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
        productsGrid.innerHTML = '<div style="text-align: center; padding: 2rem; color: #6c757d;"><i class="fas fa-box-open fa-3x"></i><p>No products found</p></div>';
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
    col.className = 'product-card';
    
    const quantity = productQuantities[product.id] || 0;
    const isInCart = cart.find(item => item.id === product.id);
    const isOutOfStock = product.stock === 0;
    
    col.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://picsum.photos/seed/default/200/200.jpg'">
        <div class="product-details">
            <div class="product-name">${product.name}</div>
            <div class="product-price">
                <span class="price">₹${product.price}</span>
                <span class="unit">${product.unit}</span>
            </div>
            <div class="product-actions">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="updateQuantity(${product.id}, -1)" ${quantity === 0 ? 'disabled' : ''}>-</button>
                    <span class="quantity-display">${quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${product.id}, 1)" ${isOutOfStock ? 'disabled' : ''}>+</button>
                </div>
                <button class="add-btn" onclick="addToCart(${product.id})" ${quantity === 0 || isOutOfStock ? 'disabled' : ''}>
                    ${isInCart ? '✓ Added' : (isOutOfStock ? 'Out of Stock' : 'Add to Cart')}
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Update quantity
function updateQuantity(productId, change) {
    const product = findProduct(productId);
    if (!product) return;
    
    const currentQty = productQuantities[productId] || 0;
    const newQty = Math.max(0, currentQty + change);
    
    // Check stock availability
    if (newQty > product.stock) {
        showToast(`Only ${product.stock} ${product.unit} available`, 'warning');
        return;
    }
    
    productQuantities[productId] = newQty;
    saveData();
    displayProducts(currentCategory);
}

// Add to cart
function addToCart(productId) {
    const quantity = productQuantities[productId] || 0;
    
    if (quantity === 0) {
        showToast('Please select quantity first', 'warning');
        return;
    }
    
    const product = findProduct(productId);
    if (!product) return;
    
    // Check if already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    // Reset quantity
    productQuantities[productId] = 0;
    saveData();
    updateCartUI();
    displayProducts(currentCategory);
    
    showToast(`${product.name} added to cart!`, 'success');
}

// Find product
function findProduct(productId) {
    for (let category in products) {
        const product = products[category].find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

// Select category
function selectCategory(category) {
    currentCategory = category;
    
    // Update active state
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    event.target.closest('.category-card').classList.add('active');
    
    // Display products
    displayProducts(category);
}

// Search products
function searchProducts(searchTerm) {
    if (!searchTerm) {
        displayProducts(currentCategory);
        return;
    }
    
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    let searchResults = [];
    
    Object.keys(products).forEach(category => {
        const categoryProducts = products[category].filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        searchResults = searchResults.concat(categoryProducts);
    });
    
    if (searchResults.length === 0) {
        productsGrid.innerHTML = '<div style="text-align: center; padding: 2rem; color: #6c757d;"><i class="fas fa-search fa-3x"></i><p>No products found</p></div>';
        return;
    }
    
    searchResults.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const floatingCartCount = document.getElementById('floatingCartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCount.textContent = totalItems;
    floatingCartCount.textContent = totalItems;
    
    // Update cart modal
    updateCartModal();
}

// Update cart modal
function updateCartModal() {
    const cartItems = document.getElementById('cartItems');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const orderAlert = document.getElementById('orderAlert');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 2rem; color: #6c757d;"><i class="fas fa-shopping-cart fa-3x"></i><p>Your cart is empty</p></div>';
        subtotal.textContent = '₹0';
        total.textContent = '₹0';
        checkoutBtn.disabled = true;
        orderAlert.innerHTML = '';
        return;
    }
    
    let html = '';
    let subtotalAmount = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotalAmount += itemTotal;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price} × ${item.quantity}</div>
                </div>
                <div class="cart-item-total">₹${itemTotal}</div>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    subtotal.textContent = `₹${subtotalAmount}`;
    total.textContent = `₹${subtotalAmount}`;
    
    // Check minimum order
    const minOrderAmount = storeConfig.minOrderAmount;
    if (subtotalAmount < minOrderAmount) {
        checkoutBtn.disabled = true;
        orderAlert.innerHTML = `<div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 0.8rem; color: #856407;">
            <i class="fas fa-exclamation-triangle"></i> Minimum order ₹${minOrderAmount}. Add ₹${minOrderAmount - subtotalAmount} more.
        </div>`;
    } else {
        checkoutBtn.disabled = false;
        orderAlert.innerHTML = `<div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 0.8rem; color: #155724;">
            <i class="fas fa-check-circle"></i> Order eligible for free delivery!
        </div>`;
    }
}

// Toggle cart modal
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

// Close cart on backdrop click
function closeCartOnBackdrop(event) {
    if (event.target === event.currentTarget) {
        toggleCart();
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) return;
    
    // Create order data
    const orderData = {
        orderId: 'ORD' + Date.now(),
        items: cart,
        totalAmount: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderTime: new Date().toISOString(),
        status: 'pending'
    };
    
    // Save order to localStorage (in real app, this would go to server)
    let orders = JSON.parse(localStorage.getItem('storeOrders') || '[]');
    orders.push(orderData);
    localStorage.setItem('storeOrders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    productQuantities = {};
    saveData();
    updateCartUI();
    displayProducts(currentCategory);
    
    // Close cart modal
    toggleCart();
    
    // Show success message
    showOrderSuccess(orderData.orderId);
}

// Show order success
function showOrderSuccess(orderId) {
    const successHtml = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 3000; text-align: center; min-width: 300px;">
            <div style="color: #28a745; font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-check-circle"></i></div>
            <h5 style="color: #28a745; margin-bottom: 1rem;">Order Placed Successfully!</h5>
            <p style="margin-bottom: 0.5rem;"><strong>Store:</strong> ${storeConfig.name}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Order ID:</strong> ${orderId}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Website:</strong> ${storeConfig.domain}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Estimated delivery:</strong> 30-45 minutes</p>
            <p style="margin-bottom: 0.5rem;"><strong>Phone:</strong> ${storeConfig.phone}</p>
            <p style="color: #6c757d;">We'll call you shortly to confirm your order.</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background: #28a745; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; margin-top: 1rem;">Continue Shopping</button>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', successHtml);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        const successDiv = document.querySelector('div[style*="position: fixed"]');
        if (successDiv) successDiv.remove();
    }, 5000);
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#28a745' : type === 'warning' ? '#ffc107' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 3000;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Add touch optimizations
function addTouchOptimizations() {
    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add haptic feedback for buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('touchstart', function() {
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    });
}

// Add PWA features
function addPWAFeatures() {
    // Add to home screen prompt
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install button after 2 seconds
        setTimeout(() => {
            if (deferredPrompt && !localStorage.getItem('pwaDismissed')) {
                showInstallPrompt();
            }
        }, 2000);
    });
    
    function showInstallPrompt() {
        const prompt = document.createElement('div');
        prompt.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: #28a745;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 25px;
            z-index: 3000;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        `;
        prompt.innerHTML = '<i class="fas fa-download"></i> Add to Home Screen';
        prompt.onclick = function() {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(function(choiceResult) {
                if (choiceResult.outcome === 'accepted') {
                    localStorage.setItem('pwaInstalled', 'true');
                }
                prompt.remove();
            });
        };
        
        document.body.appendChild(prompt);
        
        // Auto remove after 10 seconds
        setTimeout(() => {
            if (prompt.parentElement) {
                prompt.remove();
            }
        }, 10000);
    }
    
    // Check if already installed
    if (localStorage.getItem('pwaInstalled')) {
        console.log('PWA already installed');
    }
}

// Handle online/offline status
window.addEventListener('online', function() {
    showToast('Back online!', 'success');
});

window.addEventListener('offline', function() {
    showToast('No internet connection', 'warning');
});

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced search
const debouncedSearch = debounce(searchProducts, 300);

// Override search input with debounced version
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            debouncedSearch(e.target.value);
        });
    }
});
