const express = require('express');

const router = express.Router();

const redirectlogin = (req,res,next) => {
    if (!req.session.userId) {
        res.redirect('/signin');
    }
    else{
        next();
    }
}

router.get('/',redirectlogin,(req,res) => {
    res.status(200).render('cart.html');
})

module.exports = router;