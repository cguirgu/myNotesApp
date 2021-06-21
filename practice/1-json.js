const fs = require('fs')

// Read in JSON file
const buff = fs.readFileSync('1-json.json')

// Parse JSON content to make object
const data = JSON.parse(buff)

// Change values of object
data.name = "Tina"
data.age = 21

// Change it back to a JSON string
const strng = JSON.stringify(data)

// Overrite existing JSON file with new content
fs.writeFileSync('1-json.json', strng)
