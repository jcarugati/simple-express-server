
const fs = require('fs');

var ShowAllHeroes = (req, res, next) => {
    //returns all heroes preloaded in the JSON File
    let heroes = fs.readFileSync('./data/heroes.json');
    res.send(JSON.parse(heroes));
}

module.exports = ShowAllHeroes;

