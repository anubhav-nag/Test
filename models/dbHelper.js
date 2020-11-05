const db = require('../dbConfig');

module.exports = {
    add,
    findByemail,
    findByid
}


async function add(lesson) {
    return await db('users').insert(lesson, ['first_name']);
    // const [id] = await db('lessons').insert(lesson);
    // return id;
}

function findByemail(email) {
    return db('users').where({email: email}).first();
}

function findByid(id) {
    return db('users').where({id: id}).first();
}