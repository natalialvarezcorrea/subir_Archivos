const express = require('express');
const router = express.Router();


router.get('/form', async (req, res) => {
    res.render('partials/form');
});


module.exports = router;


