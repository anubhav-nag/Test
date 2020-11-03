const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const User = require('../models/dbHelper');

router.get('/',(req,res) => {
    res.status(200).render('sign_in.html');
});

router.post('/',(req,res) => {
    const user = req.body;
    User.findByemail(user['name']).then(authUser => {
        if (authUser) {
            bcrypt.compare(user['password'], authUser['password'], function(err, result) {
                if (result == true){
                    console.log(authUser);
                    res.status(200).redirect('/')
                }
            });
        }
        else{
            console.log("either usename or password is wrong");
            res.status(404).redirect('/signup');
        }
    })
    .catch(error => {
        res.status(500).send("some error ")
    })
})

module.exports = router;