const express = require('express');

const router = express.Router();

const User = require('../models/dbHelper');

router.get('/',(req,res) => {
    try{
        const id = req.session.userId;
        if(id){
            console.log(`*** ${id} *** contact`);
            User.findByid(id).then(authUser => {
                const user = {id : authUser.id, name : authUser.first_name + authUser.last_name, email : authUser.email}
                res.status(200).render('contact.html',{user});
            })
        }
        else{
            console.log('no session contact');
            res.status(200).render('contact.html');
        }
    }
    catch(err){
        res.status(500).send("some wrong");
    }
})

module.exports = router;