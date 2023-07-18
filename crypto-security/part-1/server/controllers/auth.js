const bcrypt = require('bcryptjs')

const users = []

module.exports = {
  login: (req, res) => {
    console.log(req.body)
    console.log(users)
    const { usern, password } = req.body
    let userData;

    for (let i = 0; i < users.length; i++) {
      if (username === users[i].username) {
        userData = users[i]
      }
    }

    if (!userData) {
      res.status(200).send('User not found')
    } else {
      bcrypt.compare(password, userData.passwordHash, (err, result) => {
        // if nothing went wrong while comparing
        if (!err) {
          if (result) {
            // Create a copy of the user object without the passwordHash property
            const userCopy = { ...userData }
            delete userCopy.passwordHash
            res.status(200).send(userCopy)
          } else {
            res.status(200).send('User not found.')
          }
        } else { // if something goes wrong with comparisson 
          console.log('Error during bcrypt.compare(): ' + err)
          res.status(400).send('User not found ')
        }
      })
    }
  },
  register: (req, res) => {
    const { username, email, firstName, lastName, password } = req.body
    const saltRounds = 10

    //encripting the password
    bcrypt.hash(password, saltRounds, (err, passwordHash) => {
      let user = {}
      user.username = username
      user.email = email
      user.firstName = firstName
      user.lastName = lastName
      user.password = passwordHash
      console.log('Registering User')
      console.log(user)
      users.push(user)
      res.status(200).send(user)
    })

  },
}