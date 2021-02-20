const { Router } = require('express')
const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.get('/get', (req, res) => {
        knex.select('*').from('astrologerDetails')
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}