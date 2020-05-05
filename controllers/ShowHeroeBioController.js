const fs = require('fs');

var ShowHeroeBio = (req, res, next) => {
    /*
    Returns the Heroe Name that matches the ID.If the optional parameter exists it 'll return the full heroe object.
    Else it'll return a simple string full of sorrow
    */
    
    let heroes = fs.readFileSync('./data/heroes.json')
    let parseHeroes = JSON.parse(heroes);
    let optionalParamOk = req.params.ok;

    let result = parseHeroes.filter( heroe => heroe.id == req.params.id)
    if (result.length == 0){
        res.send(`Lamento que no desees saber más de mi :(`)
    }else{ 
        if (!optionalParamOk){
            result.forEach(element => {
                res.send(`${element.nombre} ​Lamento que no desees saber más de mi :(`);
            });
        }else{
            result.forEach(element => {
                res.send(element);
            });
        }
    }
}

module.exports = ShowHeroeBio;