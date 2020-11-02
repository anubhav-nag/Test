const db = require('../dbConfig');

module.exports = {
    add,
    findByemail
}


async function add(lesson) {
    return await db('users').insert(lesson, ['first_name']);
    // const [id] = await db('lessons').insert(lesson);
    // return id;
}

function findByemail(email) {
    return db('users').where({email: email}).first();
}