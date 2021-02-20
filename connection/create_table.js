const knex = require('./knex_connection')

knex.schema.hasTable('astrologerDetails').then((exists) => {
    if(!exists){
        return knex.schema.createTable('astrologerDetails', (table) => {
            table.increments('id')
            table.string('name')
            table.string('language')
            table.string('experience')
            table.string('categories')
            table.string('image')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created...')
})

// knex.schema.hasTable('')

// let startTime = new Date(Date.now())
// let endTime = new Date(startTime.getTime());
// set_Time: endTime

knex.schema.hasTable('orderStatus').then((exists) => {
    if(!exists){
        return knex.schema.createTable('orderStatus', (table) => {
            table.increments('astrologer_id')
            table.string('customer_name')
            table.string('customer_email')
            table.string('customer_phoneNUmber')
            table.integer('astrologer_id')
            table.string('BookingDate')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created...')
})
