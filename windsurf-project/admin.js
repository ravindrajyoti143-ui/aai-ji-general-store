// Admin Panel JavaScript
let orders = [];
let currentFilter = 'all';

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    loadOrders();
    updateDashboard();
    
    // Event listeners
    document.getElementById('statusFilter').addEventListener('change', function() {
        currentFilter = this.value;
        displayOrders();
    });
    
    // Auto refresh every 30 seconds
    setInterval(refreshOrders, 30000);
});

// Load orders from localStorage
function loadOrders() {
    orders = JSON.parse(localStorage.getItem('orders') || '[]');
    displayOrders();
    updateDashboard();
}

// Display orders in table
function displayOrders() {
    const ordersTable = document.getElementById('ordersTable');
    const noOrders = document.getElementById('noOrders');
    
    let filteredOrders = orders;
    
    // Apply status filter
    if (currentFilter !== 'all') {
        filteredOrders = orders.filter(order => order.status === currentFilter);
    }
    
    // Sort by order time (newest first)
    filteredOrders.sort((a, b) => new Date(b.orderTime) - new Date(a.orderTime));
    
    if (filteredOrders.length === 0) {
        ordersTable.innerHTML = '';
        noOrders.style.display = 'block';
        return;
    }
    
    noOrders.style.display = 'none';
    
    let html = '';
    filteredOrders.forEach(order => {
        const orderDate = new Date(order.orderTime);
        const timeString = orderDate.toLocaleString();
        const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
        
        // Set default status if not present
        if (!order.status) {
            order.status = 'pending';
        }
        
        html += `
            <tr>
                <td><strong>${order.orderId}</strong></td>
                <td>${order.customerName}</td>
                <td>${order.customerPhone}</td>
                <td>${itemCount} items</td>
                <td>₹${order.totalAmount}</td>
                <td>${timeString}</td>
                <td>${getAreaName(order.deliveryArea)}</td>
                <td>${getStatusBadge(order.status)}</td>
                <td>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-info" onclick="viewOrderDetails('${order.orderId}')" title="View Details">
                            <i class="fas fa-eye"></i>
                        </button>
                        ${getActionButtons(order)}
                    </div>
                </td>
            </tr>
        `;
    });
    
    ordersTable.innerHTML = html;
}

// Get area name from area code
function getAreaName(areaCode) {
    const areas = {
        'main_road': 'Main Road (0-2km)',
        'colony_1': 'Colony Area 1 (2-3km)',
        'colony_2': 'Colony Area 2 (3-4km)',
        'outskirts': 'Outskirts (4-5km)'
    };
    return areas[areaCode] || areaCode;
}

// Get status badge HTML
function getStatusBadge(status) {
    const badges = {
        'pending': '<span class="badge bg-warning">Pending</span>',
        'confirmed': '<span class="badge bg-info">Confirmed</span>',
        'delivered': '<span class="badge bg-success">Delivered</span>',
        'cancelled': '<span class="badge bg-danger">Cancelled</span>'
    };
    return badges[status] || badges['pending'];
}

// Get action buttons based on order status
function getActionButtons(order) {
    let buttons = '';
    
    if (order.status === 'pending') {
        buttons += `
            <button class="btn btn-success" onclick="updateOrderStatus('${order.orderId}', 'confirmed')" title="Confirm Order">
                <i class="fas fa-check"></i>
            </button>
            <button class="btn btn-danger" onclick="updateOrderStatus('${order.orderId}', 'cancelled')" title="Cancel Order">
                <i class="fas fa-times"></i>
            </button>
        `;
    } else if (order.status === 'confirmed') {
        buttons += `
            <button class="btn btn-success" onclick="updateOrderStatus('${order.orderId}', 'delivered')" title="Mark as Delivered">
                <i class="fas fa-truck"></i>
            </button>
            <button class="btn btn-danger" onclick="updateOrderStatus('${order.orderId}', 'cancelled')" title="Cancel Order">
                <i class="fas fa-times"></i>
            </button>
        `;
    }
    
    return buttons;
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
    const orderIndex = orders.findIndex(order => order.orderId === orderId);
    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        orders[orderIndex].statusUpdated = new Date().toISOString();
        
        // Save to localStorage
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Refresh display
        displayOrders();
        updateDashboard();
        
        // Show notification
        showNotification(`Order ${orderId} status updated to ${newStatus}`, 'success');
    }
}

// View order details
function viewOrderDetails(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;
    
    const orderDetails = document.getElementById('orderDetails');
    
    let itemsHtml = '';
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
    
    orderDetails.innerHTML = `
        <div class="row mb-3">
            <div class="col-md-6">
                <h6>Order Information</h6>
                <p><strong>Order ID:</strong> ${order.orderId}</p>
                <p><strong>Status:</strong> ${getStatusBadge(order.status)}</p>
                <p><strong>Order Time:</strong> ${new Date(order.orderTime).toLocaleString()}</p>
                <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
            </div>
            <div class="col-md-6">
                <h6>Customer Information</h6>
                <p><strong>Name:</strong> ${order.customerName}</p>
                <p><strong>Phone:</strong> ${order.customerPhone}</p>
                <p><strong>Delivery Area:</strong> ${getAreaName(order.deliveryArea)}</p>
                <p><strong>Address:</strong> ${order.deliveryAddress}</p>
            </div>
        </div>
        
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
        
        ${order.orderNotes ? `
            <h6>Order Notes</h6>
            <p>${order.orderNotes}</p>
        ` : ''}
        
        <div class="mt-3">
            ${getActionButtons(order)}
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('orderDetailsModal'));
    modal.show();
}

// Update dashboard statistics
function updateDashboard() {
    const totalOrders = orders.length;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayOrders = orders.filter(order => {
        const orderDate = new Date(order.orderTime);
        return orderDate >= today;
    }).length;
    
    const pendingOrders = orders.filter(order => order.status === 'pending').length;
    
    const totalRevenue = orders
        .filter(order => order.status !== 'cancelled')
        .reduce((sum, order) => sum + order.totalAmount, 0);
    
    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('todayOrders').textContent = todayOrders;
    document.getElementById('pendingOrders').textContent = pendingOrders;
    document.getElementById('totalRevenue').textContent = `₹${totalRevenue}`;
    
    // Update recent orders list
    updateRecentOrders();
    
    // Update daily summary
    updateDailySummary();
}

// Update recent orders list
function updateRecentOrders() {
    const recentOrdersList = document.getElementById('recentOrdersList');
    
    const recentOrders = orders
        .sort((a, b) => new Date(b.orderTime) - new Date(a.orderTime))
        .slice(0, 5);
    
    if (recentOrders.length === 0) {
        recentOrdersList.innerHTML = '<p class="text-muted">No recent orders</p>';
        return;
    }
    
    let html = '<div class="list-group">';
    recentOrders.forEach(order => {
        html += `
            <div class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <strong>${order.orderId}</strong>
                        <div class="small text-muted">${order.customerName} • ₹${order.totalAmount}</div>
                    </div>
                    <div>
                        ${getStatusBadge(order.status)}
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    recentOrdersList.innerHTML = html;
}

// Update daily summary
function updateDailySummary() {
    const dailySummary = document.getElementById('dailySummary');
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayOrders = orders.filter(order => {
        const orderDate = new Date(order.orderTime);
        return orderDate >= today;
    });
    
    const todayRevenue = todayOrders
        .filter(order => order.status !== 'cancelled')
        .reduce((sum, order) => sum + order.totalAmount, 0);
    
    const pendingCount = todayOrders.filter(order => order.status === 'pending').length;
    const confirmedCount = todayOrders.filter(order => order.status === 'confirmed').length;
    const deliveredCount = todayOrders.filter(order => order.status === 'delivered').length;
    
    dailySummary.innerHTML = `
        <div class="row text-center">
            <div class="col-6">
                <div class="border-end">
                    <h4 class="text-primary">${todayOrders.length}</h4>
                    <small class="text-muted">Total Orders</small>
                </div>
            </div>
            <div class="col-6">
                <h4 class="text-success">₹${todayRevenue}</h4>
                <small class="text-muted">Revenue</small>
            </div>
        </div>
        <hr>
        <div class="row text-center">
            <div class="col-4">
                <small class="text-warning">● ${pendingCount}</small><br>
                <small>Pending</small>
            </div>
            <div class="col-4">
                <small class="text-info">● ${confirmedCount}</small><br>
                <small>Confirmed</small>
            </div>
            <div class="col-4">
                <small class="text-success">● ${deliveredCount}</small><br>
                <small>Delivered</small>
            </div>
        </div>
    `;
}

// Refresh orders
function refreshOrders() {
    loadOrders();
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

// Export orders (for backup)
function exportOrders() {
    const dataStr = JSON.stringify(orders, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `orders_backup_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}
