const { json } = require('body-parser');
const express = require('express');

const router = express.Router();

const Users = require('../models/dbHelper');

router.get('/',(req,res) => {
    res.status(200).render('sign_up.html');
});

router.post('/',(req,res) => {
    const newUser = req.body;
    Users.add(newUser).then(user => {
        console.log(newUser);
        res.status(200).redirect('/signin');
    })
    .catch(error => {
        res.status(404).send("Something went wrong!!");
    })
});

module.exports = router; 