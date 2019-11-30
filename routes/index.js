const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res) => {
    res.render('index', { title: 'Welcome', message: "This is the home page"})
});

module.exports = router;