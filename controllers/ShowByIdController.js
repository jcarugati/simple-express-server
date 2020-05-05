const fs = require('fs');


var ShowByIdController = (req, res, next) => {
    //Returns only the heroe that matches de ID
    let heroes = fs.readFileSync('./data/heroes.json');
    let parseHeroes = JSON.parse(heroes);
    parseHeroes.forEach(element => {
        if (req.params.id == element.id){
            res.send(`​Hola, mi nombre es ${element.nombre} y soy ${element.profesion}.​`);
        }
    });
}

module.exports = ShowByIdController;