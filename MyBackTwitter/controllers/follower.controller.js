const dbManager = require ('../database/db.manager');

/**
 * Creation of an user
 * @param {*} followerObject JSON Object with User information
 */
async function createFollower (req, res) {    
    if (!req.body) {
        res.status(400).send({ message: "REQUEST IS EMPTY" });
        return;
      }
      const newFollowerObject = {
        idUser: req.body.idUser,
        followername: req.body.followername
      };   

   dbManager.Follower.create(newFollowerObject)
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

async function findAllFollowers (req, res){
    try {
        const followers = await dbManager.Follower.findAll ();
        res.json({
                data: followers
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: ":( ALGO SALIÓ MAL! SORRY :("
        });
    }
}

exports.createFollower = createFollower;
exports.findAllFollowers = findAllFollowers;
