const dbManager = require ('../database/db.manager');

/**
 * Creation of an message
 * @param {*} MessageObject JSON Object with Messafe information
 */
async function createMesage (req, res) {    
    if (!req.body) {
        res.status(400).send({ message: "REQUEST IS EMPTY" });
        return;
      }
      const newMessageObject = {
        message: req.body.message,
        creation_date: req.body.creation_date,
        idUserSource: req.body.idUserSource,        
        idUserDestiny: req.body.idUserDestiny
      };
   
   dbManager.Message.create(newMessageObject)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({
        message: "SOMENTHING HAPPENED, ERROR"
      });
    });
}
exports.createMesage = createMesage;