const express = require('express')
const app = express()
const cors = require('cors')

//middleware
app.use(express.json())
app.use(cors())


// from controller.js
const { getHouses, deleteHouse, createHouse, updateHouse } = require('./controller.js')


//endpoints
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)







//listen port 
app.listen(4004, () => console.log(`up and running on 4004`))