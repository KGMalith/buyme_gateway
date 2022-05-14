const express = require('express');
const router = express.Router();
const proxy = require('express-http-proxy');

//Define Routing paths
router.use('/auth', proxy('http://localhost:4001'));
router.use('/wishlist', proxy('http://localhost:4002'));

module.exports = router;