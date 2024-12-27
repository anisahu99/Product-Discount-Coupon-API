const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { getProducts, getUsers, getCoupons, saveCoupon } = require('../models/couponModel');

// Generate a unique time-bound discount coupon
exports.generateCoupon = (req, res) => {
    const { productId, userId } = req.body;

    // Validate product and user existence
    const products = getProducts();
    const users = getUsers();

    if (!products.find((p) => p.id === productId)) {
        return res.status(404).json({ message: 'Product not found' });
    }
    if (!users.find((u) => u.id === userId)) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Create coupon
    const coupon = {
        id: uuidv4(),
        productId,
        userId,
        code: `DISCOUNT-${uuidv4()}`,
        expiresAt: Date.now() + 3600000 // Expires in 1 hour
    };

    // Save to mock database
    saveCoupon(coupon);
    res.status(201).json({ message: 'Coupon generated successfully', coupon });
};

// Validate a coupon
exports.validateCoupon = (req, res) => {
    const { code, productId, userId } = req.body;
    const coupons = getCoupons();

    const coupon = coupons.find(
        (c) => c.code === code && c.productId === productId && c.userId === userId
    );

    if (!coupon) {
        return res.status(404).json({ message: 'Invalid coupon' });
    }

    if (Date.now() > coupon.expiresAt) {
        return res.status(400).json({ message: 'Coupon has expired' });
    }

    res.status(200).json({ message: 'Coupon is valid', coupon });
};
