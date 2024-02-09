const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/food-ordering', {useNewUrlParser : true})
.catch(e => {
    console.error('Error:', e.message)
})

const db = mongoose.connection

module.exports = db