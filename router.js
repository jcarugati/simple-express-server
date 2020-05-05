const express = require('express');
const HomeController = require('./controllers/HomeController');
const ShowAllHeroesController = require('./controllers/ShowAllHeroesController');
const ShowByIdController = require('./controllers/ShowByIdController');
const ShowHeroeBio = require('./controllers/ShowHeroeBioController');
const CreditsController = require('./controllers/CreditsController')
var app = express();
var router = express.Router();

//Sets up router middleware
router.get("/home",HomeController);
router.get("/heroes", ShowAllHeroesController);
router.get("/heroes/bio/:id/:ok?", ShowHeroeBio);
router.get("/heores/detail/:id", ShowByIdController);
router.get("/credits", CreditsController);

module.exports = router