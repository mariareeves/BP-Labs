const houseDatabase = require('./db.json')

// variable to keep track of your upcoming house id
let houseIndex = 4


module.exports = {
    getHouses: ((req, res) => {
        res.status(200).send(houseDatabase)
    }),
    deleteHouse: (req, res) => {
        const id = +req.params.id

        const index = houseDatabase.findIndex(house => house.id === id)
        if (index !== -1) {
            houseDatabase.splice(index, 1)
            res.status(200).send(houseDatabase)
        } else {
            res.status(400).send('House not found')
        }
    },
    createHouse: (req, res) => {
        const { address, price, imageUrl } = req.body

        houseDatabase.push({
            id: houseIndex,
            address: address,
            price: price,
            imageUrl: imageUrl
        })
        houseIndex++

        res.status(200).send(houseDatabase)
    },
    updateHouse: (req, res) => {
        const id = +req.params.id
        const type = req.body.type
        const index = houseDatabase.findIndex(house => house.id === id)

        if (index === undefined) {
            res.status(400).send('movie not found')
        } else if (type === 'plus') {
            houseDatabase[index].price += 10000
            res.status(200).send(houseDatabase);
        } else if (type === 'minus') {
            houseDatabase[index].price -= 10000
            res.status(200).send(houseDatabase);

        } else {
            res.status(400).send('Invalid type constraing')
        }

    }
}

