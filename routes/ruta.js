const express = require('express');
const router = express.Router();

router.get('/ruta', async (req, res) => {
    res.render('partials/ruta');
});


module.exports = router;