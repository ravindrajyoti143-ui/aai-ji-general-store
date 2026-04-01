// Admin Dashboard JavaScript

// Initialize products and orders data
let products = [];
let orders = [];
let settings = {};
let deliveryAreas = [];

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    updateDashboard();
    
    // Event listeners
    document.getElementById('productSearch').addEventListener('input', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('stockFilter').addEventListener('change', filterProducts);
    document.getElementById('orderStatusFilter').addEventListener('change', filterOrders);
    
    // Auto refresh every 30 seconds
    setInterval(() => {
        refreshProducts();
        refreshOrders();
        updateDashboard();
    }, 30000);
});

// Load data from localStorage
function loadData() {
    // Load products
    const savedProducts = localStorage.getItem('storeProducts');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
    } else {
        // Initialize with default products
        initializeDefaultProducts();
    }
    
    // Load orders
    const savedOrders = localStorage.getItem('storeOrders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
    
    // Load settings
    const savedSettings = localStorage.getItem('storeSettings');
    if (savedSettings) {
        settings = JSON.parse(savedSettings);
    } else {
        settings = {
            storeName: 'Aai Ji General Store',
            storePhone: '+91 98765 43210',
            storeEmail: 'store@example.com',
            storeAddress: 'Main Road, Your City, PIN: 123456',
            minOrderAmount: 500,
            deliveryRadius: 5
        };
    }
    
    // Load delivery areas
    const savedAreas = localStorage.getItem('deliveryAreas');
    if (savedAreas) {
        deliveryAreas = JSON.parse(savedAreas);
    } else {
        deliveryAreas = [
            { id: 1, name: 'Main Road', range: '0-2km', code: 'main_road' },
            { id: 2, name: 'Colony Area 1', range: '2-3km', code: 'colony_1' },
            { id: 3, name: 'Colony Area 2', range: '3-4km', code: 'colony_2' },
            { id: 4, name: 'Outskirts', range: '4-5km', code: 'outskirts' }
        ];
    }
    
    displayProducts();
    displayOrders();
    loadSettings();
    loadDeliveryAreas();
}

// Initialize default products
function initializeDefaultProducts() {
    products = [
        // Grains & Staples
        { id: 1, name: 'Basmati Rice', category: 'grains', price: 120, unit: '1kg', stock: 50, minStock: 10, image: 'https://picsum.photos/seed/rice/300/300.jpg', active: true },
        { id: 2, name: 'Wheat Atta', category: 'grains', price: 45, unit: '1kg', stock: 30, minStock: 10, image: 'https://picsum.photos/seed/atta/300/300.jpg', active: true },
        { id: 3, name: 'Maida', category: 'grains', price: 40, unit: '1kg', stock: 25, minStock: 10, image: 'https://picsum.photos/seed/maida/300/300.jpg', active: true },
        
        // Dals & Pulses
        { id: 4, name: 'Toor Dal', category: 'dals', price: 100, unit: '1kg', stock: 40, minStock: 10, image: 'https://picsum.photos/seed/toor/300/300.jpg', active: true },
        { id: 5, name: 'Moong Dal', category: 'dals', price: 120, unit: '1kg', stock: 35, minStock: 10, image: 'https://picsum.photos/seed/moong/300/300.jpg', active: true },
        { id: 6, name: 'Masoor Dal', category: 'dals', price: 85, unit: '1kg', stock: 20, minStock: 10, image: 'https://picsum.photos/seed/masoor/300/300.jpg', active: true },
        
        // Oil & Ghee
        { id: 7, name: 'Sunflower Oil', category: 'oil', price: 150, unit: '1L', stock: 30, minStock: 10, image: 'https://picsum.photos/seed/sunflower/300/300.jpg', active: true },
        { id: 8, name: 'Mustard Oil', category: 'oil', price: 140, unit: '1L', stock: 25, minStock: 10, image: 'https://picsum.photos/seed/mustard/300/300.jpg', active: true },
        { id: 9, name: 'Ghee', category: 'oil', price: 450, unit: '1kg', stock: 15, minStock: 5, image: 'https://picsum.photos/seed/ghee/300/300.jpg', active: true },
        
        // Spices & Masala
        { id: 10, name: 'Turmeric Powder', category: 'spices', price: 80, unit: '200g', stock: 50, minStock: 20, image: 'https://picsum.photos/seed/turmeric/300/300.jpg', active: true },
        { id: 11, name: 'Red Chilli Powder', category: 'spices', price: 60, unit: '200g', stock: 45, minStock: 20, image: 'https://picsum.photos/seed/chilli/300/300.jpg', active: true },
        { id: 12, name: 'Garam Masala', category: 'spices', price: 90, unit: '100g', stock: 30, minStock: 15, image: 'https://picsum.photos/seed/garam/300/300.jpg', active: true },
        
        // Snacks & Foods
        { id: 13, name: 'Parle-G Biscuits', category: 'snacks', price: 10, unit: 'pack', stock: 100, minStock: 30, image: 'https://picsum.photos/seed/parleg/300/300.jpg', active: true },
        { id: 14, name: 'Lays Chips', category: 'snacks', price: 20, unit: 'pack', stock: 80, minStock: 25, image: 'https://picsum.photos/seed/lays/300/300.jpg', active: true },
        { id: 15, name: 'Maggi Noodles', category: 'snacks', price: 14, unit: 'pack', stock: 60, minStock: 20, image: 'https://picsum.photos/seed/maggi/300/300.jpg', active: true },
        
        // Beverages
        { id: 16, name: 'Tea Powder', category: 'beverages', price: 120, unit: '250g', stock: 40, minStock: 15, image: 'https://picsum.photos/seed/tea/300/300.jpg', active: true },
        { id: 17, name: 'Coca Cola', category: 'beverages', price: 40, unit: '1L', stock: 50, minStock: 20, image: 'https://picsum.photos/seed/coke/300/300.jpg', active: true },
        { id: 18, name: 'Fresh Milk', category: 'beverages', price: 56, unit: '1L', stock: 20, minStock: 10, image: 'https://picsum.photos/seed/milk/300/300.jpg', active: true },
        
        // Personal Care
        { id: 19, name: 'Lifebuoy Soap', category: 'personal', price: 35, unit: 'piece', stock: 60, minStock: 20, image: 'https://picsum.photos/seed/lifebuoy/300/300.jpg', active: true },
        { id: 20, name: 'Head & Shoulders', category: 'personal', price: 120, unit: '200ml', stock: 30, minStock: 10, image: 'https://picsum.photos/seed/h&s/300/300.jpg', active: true },
        
        // Household
        { id: 21, name: 'Surf Excel', category: 'household', price: 180, unit: '1kg', stock: 25, minStock: 10, image: 'https://picsum.photos/seed/surf/300/300.jpg', active: true },
        { id: 22, name: 'Vim Dishwash', category: 'household', price: 85, unit: '500ml', stock: 35, minStock: 15, image: 'https://picsum.photos/seed/vim/300/300.jpg', active: true }
    ];
    
    saveProducts();
}

// Display products in table
function displayProducts() {
    const productsTable = document.getElementById('productsTable');
    const filteredProducts = getFilteredProducts();
    
    if (filteredProducts.length === 0) {
        productsTable.innerHTML = '<tr><td colspan="7" class="text-center">No products found</td></tr>';
        return;
    }
    
    let html = '';
    filteredProducts.forEach(product => {
        const stockStatus = getStockStatus(product);
        html += `
            <tr>
                <td>
                    <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                </td>
                <td>
                    <strong>${product.name}</strong>
                    ${product.description ? `<br><small class="text-muted">${product.description}</small>` : ''}
                </td>
                <td>${getCategoryName(product.category)}</td>
                <td>₹${product.price}</td>
                <td>${product.stock} ${product.unit}</td>
                <td>${stockStatus}</td>
                <td>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-primary" onclick="editProduct(${product.id})" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-info" onclick="duplicateProduct(${product.id})" title="Duplicate">
                            <i class="fas fa-copy"></i>
                        </button>
                        <button class="btn btn-${product.active ? 'warning' : 'success'}" onclick="toggleProductStatus(${product.id})" title="${product.active ? 'Deactivate' : 'Activate'}">
                            <i class="fas fa-${product.active ? 'eye-slash' : 'eye'}"></i>
                        </button>
                        <button class="btn btn-danger" onclick="deleteProduct(${product.id})" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    productsTable.innerHTML = html;
}

// Get filtered products
function getFilteredProducts() {
    let filtered = products;
    
    // Search filter
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
    }
    
    // Category filter
    const category = document.getElementById('categoryFilter').value;
    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }
    
    // Stock filter
    const stockFilter = document.getElementById('stockFilter').value;
    if (stockFilter) {
        filtered = filtered.filter(p => {
            if (stockFilter === 'in_stock') return p.stock > p.minStock;
            if (stockFilter === 'low_stock') return p.stock <= p.minStock && p.stock > 0;
            if (stockFilter === 'out_of_stock') return p.stock === 0;
            return true;
        });
    }
    
    return filtered;
}

// Get stock status badge
function getStockStatus(product) {
    if (product.stock === 0) {
        return '<span class="badge bg-danger">Out of Stock</span>';
    } else if (product.stock <= product.minStock) {
        return '<span class="badge bg-warning">Low Stock</span>';
    } else {
        return '<span class="badge bg-success">In Stock</span>';
    }
}

// Get category name
function getCategoryName(category) {
    const categories = {
        'grains': 'Grains & Staples',
        'dals': 'Dals & Pulses',
        'oil': 'Oil & Ghee',
        'spices': 'Spices & Masala',
        'snacks': 'Snacks & Foods',
        'beverages': 'Beverages',
        'dairy': 'Dairy Products',
        'personal': 'Personal Care',
        'household': 'Household'
    };
    return categories[category] || category;
}

// Filter products
function filterProducts() {
    displayProducts();
}

// Preview image
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('productImagePreview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Save product
function saveProduct() {
    const productId = document.getElementById('productId').value;
    const product = {
        id: productId ? parseInt(productId) : Date.now(),
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        unit: document.getElementById('productUnit').value,
        stock: parseInt(document.getElementById('productStock').value),
        minStock: parseInt(document.getElementById('productMinStock').value),
        description: document.getElementById('productDescription').value,
        barcode: document.getElementById('productBarcode').value,
        active: document.getElementById('productActive').checked,
        image: document.getElementById('productImagePreview').src
    };
    
    // Validate
    if (!product.name || !product.category || !product.price || !product.unit || !product.stock) {
        alert('Please fill all required fields');
        return;
    }
    
    if (productId) {
        // Update existing product
        const index = products.findIndex(p => p.id === parseInt(productId));
        if (index !== -1) {
            products[index] = product;
        }
    } else {
        // Add new product
        products.push(product);
    }
    
    saveProducts();
    displayProducts();
    updateDashboard();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
    modal.hide();
    
    // Reset form
    document.getElementById('productForm').reset();
    document.getElementById('productImagePreview').src = 'https://picsum.photos/seed/default/300/300.jpg';
    
    showNotification(productId ? 'Product updated successfully' : 'Product added successfully', 'success');
}

// Edit product
function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Fill form
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productUnit').value = product.unit;
    document.getElementById('productStock').value = product.stock;
    document.getElementById('productMinStock').value = product.minStock;
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('productBarcode').value = product.barcode || '';
    document.getElementById('productActive').checked = product.active;
    document.getElementById('productImagePreview').src = product.image;
    
    // Update modal title
    document.getElementById('productModalTitle').textContent = 'Edit Product';
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('addProductModal'));
    modal.show();
}

// Duplicate product
function duplicateProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const newProduct = {
        ...product,
        id: Date.now(),
        name: product.name + ' (Copy)',
        stock: 0
    };
    
    products.push(newProduct);
    saveProducts();
    displayProducts();
    updateDashboard();
    
    showNotification('Product duplicated successfully', 'success');
}

// Toggle product status
function toggleProductStatus(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    product.active = !product.active;
    saveProducts();
    displayProducts();
    updateDashboard();
    
    showNotification(`Product ${product.active ? 'activated' : 'deactivated'}`, 'info');
}

// Delete product
function deleteProduct(productId) {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    products = products.filter(p => p.id !== productId);
    saveProducts();
    displayProducts();
    updateDashboard();
    
    showNotification('Product deleted successfully', 'warning');
}

// Save products to localStorage
function saveProducts() {
    localStorage.setItem('storeProducts', JSON.stringify(products));
}

// Display orders
function displayOrders() {
    const ordersTable = document.getElementById('ordersTable');
    const statusFilter = document.getElementById('orderStatusFilter').value;
    
    let filteredOrders = orders;
    if (statusFilter !== 'all') {
        filteredOrders = orders.filter(o => o.status === statusFilter);
    }
    
    // Sort by order time (newest first)
    filteredOrders.sort((a, b) => new Date(b.orderTime) - new Date(a.orderTime));
    
    if (filteredOrders.length === 0) {
        ordersTable.innerHTML = '<tr><td colspan="8" class="text-center">No orders found</td></tr>';
        return;
    }
    
    let html = '';
    filteredOrders.forEach(order => {
        const orderDate = new Date(order.orderTime);
        const timeString = orderDate.toLocaleString();
        const itemCount = order.items ? order.items.reduce((sum, item) => sum + item.quantity, 0) : 0;
        
        html += `
            <tr>
                <td><strong>${order.orderId}</strong></td>
                <td>${order.customerName}</td>
                <td>${order.customerPhone}</td>
                <td>${itemCount} items</td>
                <td>₹${order.totalAmount}</td>
                <td>${timeString}</td>
                <td>${getOrderStatusBadge(order.status)}</td>
                <td>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-info" onclick="viewOrderDetails('${order.orderId}')" title="View Details">
                            <i class="fas fa-eye"></i>
                        </button>
                        ${getOrderActionButtons(order)}
                    </div>
                </td>
            </tr>
        `;
    });
    
    ordersTable.innerHTML = html;
}

// Get order status badge
function getOrderStatusBadge(status) {
    const badges = {
        'pending': '<span class="badge bg-warning">Pending</span>',
        'confirmed': '<span class="badge bg-info">Confirmed</span>',
        'delivered': '<span class="badge bg-success">Delivered</span>',
        'cancelled': '<span class="badge bg-danger">Cancelled</span>'
    };
    return badges[status] || badges['pending'];
}

// Get order action buttons
function getOrderActionButtons(order) {
    let buttons = '';
    
    if (order.status === 'pending') {
        buttons += `
            <button class="btn btn-success" onclick="updateOrderStatus('${order.orderId}', 'confirmed')" title="Confirm">
                <i class="fas fa-check"></i>
            </button>
            <button class="btn btn-danger" onclick="updateOrderStatus('${order.orderId}', 'cancelled')" title="Cancel">
                <i class="fas fa-times"></i>
            </button>
        `;
    } else if (order.status === 'confirmed') {
        buttons += `
            <button class="btn btn-success" onclick="updateOrderStatus('${order.orderId}', 'delivered')" title="Mark Delivered">
                <i class="fas fa-truck"></i>
            </button>
            <button class="btn btn-danger" onclick="updateOrderStatus('${order.orderId}', 'cancelled')" title="Cancel">
                <i class="fas fa-times"></i>
            </button>
        `;
    }
    
    return buttons;
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;
    
    order.status = newStatus;
    order.statusUpdated = new Date().toISOString();
    
    saveOrders();
    displayOrders();
    updateDashboard();
    
    showNotification(`Order ${orderId} status updated to ${newStatus}`, 'success');
}

// View order details
function viewOrderDetails(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;
    
    const orderDetails = document.getElementById('orderDetails');
    
    let itemsHtml = '';
    if (order.items) {
        order.items.forEach(item => {
            itemsHtml += `
                <tr>
                    <td>${item.name}</td>
                    <td>₹${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>₹${item.price * item.quantity}</td>
                </tr>
            `;
        });
    }
    
    orderDetails.innerHTML = `
        <div class="row mb-3">
            <div class="col-md-6">
                <h6>Order Information</h6>
                <p><strong>Order ID:</strong> ${order.orderId}</p>
                <p><strong>Status:</strong> ${getOrderStatusBadge(order.status)}</p>
                <p><strong>Order Time:</strong> ${new Date(order.orderTime).toLocaleString()}</p>
                <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
            </div>
            <div class="col-md-6">
                <h6>Customer Information</h6>
                <p><strong>Name:</strong> ${order.customerName}</p>
                <p><strong>Phone:</strong> ${order.customerPhone}</p>
                <p><strong>Delivery Area:</strong> ${order.deliveryArea}</p>
                <p><strong>Address:</strong> ${order.deliveryAddress}</p>
            </div>
        </div>
        
        ${order.items ? `
            <h6>Order Items</h6>
            <div class="table-responsive">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="3">Total Amount:</th>
                            <th>₹${order.totalAmount}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        ` : ''}
        
        ${order.orderNotes ? `
            <h6>Order Notes</h6>
            <p>${order.orderNotes}</p>
        ` : ''}
        
        <div class="mt-3">
            ${getOrderActionButtons(order)}
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('orderDetailsModal'));
    modal.show();
}

// Filter orders
function filterOrders() {
    displayOrders();
}

// Save orders to localStorage
function saveOrders() {
    localStorage.setItem('storeOrders', JSON.stringify(orders));
}

// Update dashboard
function updateDashboard() {
    // Update stats
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('totalOrders').textContent = orders.length;
    
    // Today's revenue
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayOrders = orders.filter(o => {
        const orderDate = new Date(o.orderTime);
        return orderDate >= today && o.status !== 'cancelled';
    });
    const todayRevenue = todayOrders.reduce((sum, o) => sum + o.totalAmount, 0);
    document.getElementById('todayRevenue').textContent = `₹${todayRevenue}`;
    
    // Pending orders
    const pendingOrders = orders.filter(o => o.status === 'pending');
    document.getElementById('pendingOrders').textContent = pendingOrders.length;
    
    // Update analytics
    updateAnalytics();
}

// Update analytics
function updateAnalytics() {
    // Top products (simplified - just show all products for now)
    const topProducts = document.getElementById('topProducts');
    if (topProducts) {
        let html = '<div class="list-group">';
        products.slice(0, 5).forEach(product => {
            html += `
                <div class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>${product.name}</strong>
                            <div class="small text-muted">Stock: ${product.stock}</div>
                        </div>
                        <div>
                            <span class="badge bg-primary">₹${product.price}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        topProducts.innerHTML = html;
    }
    
    // Recent orders
    const recentOrdersDiv = document.getElementById('recentOrders');
    if (recentOrdersDiv) {
        const recentOrders = orders.sort((a, b) => new Date(b.orderTime) - new Date(a.orderTime)).slice(0, 5);
        let html = '<div class="list-group">';
        recentOrders.forEach(order => {
            html += `
                <div class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>${order.orderId}</strong>
                            <div class="small text-muted">${order.customerName}</div>
                        </div>
                        <div>
                            ${getOrderStatusBadge(order.status)}
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        recentOrdersDiv.innerHTML = html;
    }
}

// Load settings
function loadSettings() {
    document.getElementById('storeName').value = settings.storeName || '';
    document.getElementById('storePhone').value = settings.storePhone || '';
    document.getElementById('storeEmail').value = settings.storeEmail || '';
    document.getElementById('storeAddress').value = settings.storeAddress || '';
    document.getElementById('minOrderAmount').value = settings.minOrderAmount || 500;
    document.getElementById('deliveryRadius').value = settings.deliveryRadius || 5;
}

// Save settings
function saveSettings() {
    settings = {
        storeName: document.getElementById('storeName').value,
        storePhone: document.getElementById('storePhone').value,
        storeEmail: document.getElementById('storeEmail').value,
        storeAddress: document.getElementById('storeAddress').value,
        minOrderAmount: parseInt(document.getElementById('minOrderAmount').value),
        deliveryRadius: parseInt(document.getElementById('deliveryRadius').value)
    };
    
    localStorage.setItem('storeSettings', JSON.stringify(settings));
    showNotification('Settings saved successfully', 'success');
}

// Load delivery areas
function loadDeliveryAreas() {
    const areasList = document.getElementById('areasList');
    if (!areasList) return;
    
    let html = '';
    deliveryAreas.forEach(area => {
        html += `
            <div class="d-flex justify-content-between align-items-center mb-2 p-2 border rounded">
                <div>
                    <strong>${area.name}</strong> - ${area.range}
                </div>
                <button class="btn btn-sm btn-danger" onclick="removeDeliveryArea(${area.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    areasList.innerHTML = html;
}

// Add delivery area
function addDeliveryArea() {
    const name = document.getElementById('areaName').value;
    const range = document.getElementById('areaRange').value;
    
    if (!name || !range) {
        alert('Please fill both area name and range');
        return;
    }
    
    const newArea = {
        id: Date.now(),
        name: name,
        range: range,
        code: name.toLowerCase().replace(/\s+/g, '_')
    };
    
    deliveryAreas.push(newArea);
    localStorage.setItem('deliveryAreas', JSON.stringify(deliveryAreas));
    
    // Clear form
    document.getElementById('areaName').value = '';
    document.getElementById('areaRange').value = '';
    
    loadDeliveryAreas();
    showNotification('Delivery area added successfully', 'success');
}

// Remove delivery area
function removeDeliveryArea(areaId) {
    if (!confirm('Are you sure you want to remove this delivery area?')) return;
    
    deliveryAreas = deliveryAreas.filter(a => a.id !== areaId);
    localStorage.setItem('deliveryAreas', JSON.stringify(deliveryAreas));
    loadDeliveryAreas();
    showNotification('Delivery area removed successfully', 'warning');
}

// Refresh products
function refreshProducts() {
    displayProducts();
    showNotification('Products refreshed', 'info');
}

// Refresh orders
function refreshOrders() {
    displayOrders();
    showNotification('Orders refreshed', 'info');
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
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Export data
function exportData() {
    const data = {
        products: products,
        orders: orders,
        settings: settings,
        deliveryAreas: deliveryAreas
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `store_backup_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}
