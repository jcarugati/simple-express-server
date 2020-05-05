var CreditsController = (req, res, next) => {
    //It only returns credits. To make it tidier I'd put it in a constans directory of some sort.
    res.send({By:"Javier Carugati Spier"})
} 

module.exports = CreditsController;