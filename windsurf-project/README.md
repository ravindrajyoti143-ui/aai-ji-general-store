# Aai Ji General Store - Online Ordering System

A complete online ordering system for your local general store with delivery within 5km radius and minimum order value of ₹500.

## 🚀 Features

### For Customers
- **Browse Products by Categories**: Grains, Dals, Oil, Spices, Snacks, Beverages, Dairy, Personal Care, Household
- **Smart Search**: Find products quickly
- **Shopping Cart**: Add/remove items with quantity controls
- **Order Validation**: Minimum ₹500 order requirement
- **Delivery Area Check**: 5km radius delivery zones
- **Multiple Payment Options**: Cash on Delivery, UPI
- **Order Tracking**: Real-time order status updates

### For Store Owner (Admin Panel)
- **Order Management**: View, accept, reject, and deliver orders
- **Dashboard**: Real-time statistics and analytics
- **Customer Information**: Complete order and customer details
- **Revenue Tracking**: Daily and total revenue reports
- **Order Status Management**: Pending → Confirmed → Delivered
- **Auto-refresh**: Orders update automatically every 30 seconds

## 📱 Mobile-Friendly

The system is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Bootstrap 5
- **Icons**: Font Awesome 6
- **Storage**: LocalStorage (for demo purposes)
- **No Backend Required**: Runs entirely in browser

## 📦 Product Categories

1. **🌾 Grains & Staples**: Rice, Wheat, Atta, Maida, Sooji, Poha, Besan
2. **🫘 Dals & Pulses**: Toor Dal, Moong Dal, Masoor Dal, Chana Dal, Urad Dal, Rajma, Kabuli Chana
3. **🛢️ Oil & Ghee**: Sunflower Oil, Mustard Oil, Groundnut Oil, Ghee, Butter
4. **🧂 Spices & Masala**: Turmeric, Chilli Powder, Coriander, Garam Masala, Jeera, Salt
5. **🍪 Snacks & Foods**: Biscuits, Chips, Kurkure, Maggi, Samosa, Namkeen
6. **🥤 Beverages**: Tea, Coffee, Soft Drinks, Juices, Milk
7. **🥛 Dairy Products**: Milk, Curd, Paneer, Cheese, Buttermilk
8. **🧼 Personal Care**: Soap, Shampoo, Toothpaste, Hair Oil, Face Wash
9. **🧹 Household**: Detergent, Dishwash, Floor Cleaner, Garbage Bags

## 🚚 Delivery Zones

- **Main Road**: 0-2km
- **Colony Area 1**: 2-3km  
- **Colony Area 2**: 3-4km
- **Outskirts**: 4-5km

## 💰 Pricing Model

- **Minimum Order**: ₹500
- **Delivery**: Free within 5km
- **Payment**: Cash on Delivery / UPI

## 📁 Project Structure

```
windsurf-project/
├── index.html          # Main customer interface
├── admin.html          # Admin panel for store owner
├── script.js           # Customer functionality
├── admin.js            # Admin panel functionality
├── styles.css          # Customer interface styles
├── admin.css           # Admin panel styles
└── README.md           # This file
```

## 🚀 Quick Start

1. **Download/Clone** the project files
2. **Open `index.html`** in your browser for customer interface
3. **Open `admin.html`** in your browser for admin panel
4. **Start taking orders!**

## 📋 How to Use

### For Customers
1. Browse products by category or search
2. Select quantity and add items to cart
3. Minimum order of ₹500 is required
4. Proceed to checkout
5. Fill delivery details (must be within 5km)
6. Choose payment method
7. Place order

### For Store Owner
1. Open admin panel
2. View dashboard with statistics
3. Check pending orders
4. Accept/reject orders
5. Update order status
6. Track revenue

## 🔧 Customization

### Adding New Products
Edit `script.js` and add products to the `products` object:

```javascript
spices: [
    { id: 20, name: "Turmeric Powder", price: 80, unit: "200g", image: "turmeric.jpg" },
    { id: 21, name: "Red Chilli Powder", price: 60, unit: "200g", image: "chilli.jpg" },
    // Add more products here
]
```

### Changing Minimum Order
In `script.js`, update the minimum order check:

```javascript
if (subtotal < 500) { // Change 500 to your desired amount
    // Minimum order logic
}
```

### Adding New Categories
1. Add category to `products` object in `script.js`
2. Add category button in `index.html`
3. Update category navigation in `script.js`

## 🌟 Future Enhancements

- [ ] Real database integration (MySQL/MongoDB)
- [ ] SMS/WhatsApp notifications
- [ ] Online payment integration (Razorpay/Paytm)
- [ ] GPS-based distance calculation
- [ ] Customer accounts and order history
- [ ] Product recommendations
- [ ] Discount coupons and offers
- [ ] Multi-language support

## 📞 Support

For any issues or questions:
- Check the code comments
- Review the README file
- Test in different browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Perfect for college PBL projects and real-world use! 🎓🛍️**

Built with ❤️ for local store owners who want to go digital!
