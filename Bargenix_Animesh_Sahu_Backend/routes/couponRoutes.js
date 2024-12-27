const express = require('express');
const { generateCoupon, validateCoupon } = require('../controllers/couponController');

const router = express.Router();

router.post('/generate', generateCoupon);
router.post('/validate', validateCoupon);

module.exports = router;
