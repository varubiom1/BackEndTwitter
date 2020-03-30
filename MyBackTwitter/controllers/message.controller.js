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

async function findMessageById(req,res){
  try{
      const {idUserSource, idMessage}=req.params;

      const message = await dbManager.Message.findOne(
          {
              where:{
                  idMessage: idMessage
              }
          }
      );            
      res.json(message);

  }catch (error){
      req.status(500).send({
          message: ":( ALGO SALIÓ MAL! SORRY :("
      });
  }
}

exports.createMesage = createMesage;
exports.findMessageById=findMessageById;