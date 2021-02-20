const express = require('express')
const app = express()
const knex = require('./connection/create_table')
const route = express.Router()

app.use(express.json())
app.use('/', route)

require('./router/post')(route)
require('./router/get')(route)

app.listen(8000, () => {
    console.log('server has started port 8000')
})