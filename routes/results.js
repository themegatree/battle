const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('index.ejs')
})

module.exports = router;