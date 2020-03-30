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

async function findAllPosts (req, res){
    try {
        const posts = await dbManager.Post.findAll ();
        res.json({
                data: posts
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: ":( ALGO SALIÓ MAL! SORRY :("
        });
    }
}

async function findPostById(req,res){
    try{
        const {idUser, idPost}=req.params;

        const post = await dbManager.Post.findOne(
            {
                where:{
                    idUser: idUser
                }
            }
        );            
        res.json(post);

    }catch (error){
        req.status(500).send({
            message: ":( ALGO SALIÓ MAL! SORRY :("
        });
    }
}



exports.createPost = createPost;
exports.findAllPosts=findAllPosts;
exports.findPostById= findPostById;
