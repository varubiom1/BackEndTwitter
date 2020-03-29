const dbManager = require ('../database/db.manager');

/**
 * Creation of an user
 * @param {*} postObject JSON Object with User information
 */
async function createPost (req, res) {    
    if (!req.body) {
        res.status(400).send({ message: "REQUEST IS EMPTY" });
        return;
      }
      const newPostObject = {
        idUser: req.body.idUser,
        message: req.body.message
      };
   

   dbManager.Post.create(newPostObject)
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
exports.createPost = createPost;
