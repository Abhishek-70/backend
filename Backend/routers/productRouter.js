const express = require('express');
const router = express.Router();
// route or end point
router.get('/add', (req,res) => {
    res.send('response from product router');
})


module.exports = router;