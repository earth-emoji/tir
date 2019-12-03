const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res) => {
    res.render('home', { title: 'Welcome', message: "This is the home page"})
});

module.exports = router;