const express = require('express');
const router = express.Router();
const proxy = require('express-http-proxy');

//Define Routing paths
router.use('/auth', proxy('http://localhost:4001'));
router.use('/wishlist', proxy('http://localhost:4002'));
router.use('/cart', proxy('http://localhost:4003'));
router.use('/product', proxy('http://localhost:4004'));
router.use('/order', proxy('http://localhost:4005'));

module.exports = router;