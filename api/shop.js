const express = require('express');

const router = express.Router();

const User = require('../models/dbHelper');

const redirectlogin = (req,res,next) => {
    if (!req.session.userId) {
        res.redirect('/signin');
    }
    else{
        next();
    }
}

router.get('/',redirectlogin,(req,res) => {
    User.findByid(req.session.userId).then(authuser => {
        const user = {id:authuser.id, email : authuser.email, name:authuser.first_name }
        res.status(200).render('shop.html',{user});
    })
    .catch(error => {
        res.status(200).send('some wrong');
    })
    
})

module.exports = router;