const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.post('/post', (req, res) => {
        var details = {
            name: req.body.name,
            language: req.body.language,
            experience: req.body.experience,
            categories: req.body.categories,
            image: req.body.image
        }
        knex('astrologerDetails').insert(details)
        .then((data) => {
            console.log('data posted...')
            res.send('data posted...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}