const express = require('express');

const router = express.Router();

const User = require('../models/dbHelper');

router.get('/',(req,res) => {
    try {
        const id = req.session.userId;
        if (id) {
            console.log(`*** ${id} *** home`);
            User.findByid(id).then(authUser => {
                const user = { id: authUser.id, name: authUser.first_name + authUser.last_name, email: authUser.email }
                res.status(200).render('try.html', { user : user });
            })
        }
        else {
            console.log('no session home');
            User.getallveges().then(veges => {
                console.log(veges[0]);
                res.status(200).render('try.html',{veges : veges});
            })
            .catch(err => {
                console.log('some error');
            })
            
        }
    }
    catch(err){
        console.error(err);
        res.send('some wrong')
    }
   
})

module.exports = router;