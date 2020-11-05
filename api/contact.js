const express = require('express');

const router = express.Router();

const User = require('../models/dbHelper');

router.get('/',(req,res) => {
    const id = req.session.userId;
    if(id){
        console.log(`*** ${id} ***`);
        User.findByid(id).then(authUser => {
            const user = {id : authUser.id, name : authUser.first_name + authUser.last_name, email : authUser.email}
            res.status(200).render('contact.html',{user});
        })
    }
    else{
        console.log('no session');
        res.status(200).render('contact.html');
    }
})

module.exports = router;