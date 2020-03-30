const dbManager = require ('../database/db.manager');

/**
 * Creation of an user
 * @param {*} userObject JSON Object with User information
 */
async function createUser (req, res) {
     // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "EL REQ ESTÁ VACÍO! OUT OF GAS ! SORRY :("
        });
        return;
    }

     // CREATING THE OBJECT TO PERSIST
    const newUserObject = {
        username: req.body.username,
        creation_date: req.body.creation_date
    }

    dbManager.User.create(newUserObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: ":( HUBO UN ERROR"
            });
        }
    );
}

async function findAllUsers (req, res){
    try {
        const users = await dbManager.User.findAll ();
        res.json({
                data: users
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: ":( ALGO SALIÓ MAL! SORRY :("
        });
    }
}

async function findUserById(req,res){
    try{
        const {idUser, idPost}=req.params;

        const user = await dbManager.User.findOne(
            {
                where:{
                    idUser: idUser
                }
            }
        );
            
        res.json(user);

    }catch (error){
        req.status(500).send({
            message: ":( ALGO SALIÓ MAL! SORRY :("
        });
    }
}

/**
 * Delete of an user
 * @param {*} userObject JSON Object with User information
 */
async function deleteByUser (req, res){
    dbManager.User.destroy({
        where: {
            idUser: req.params.idUser
        }
    }).then(function (deletedRecord) {
        if(deletedRecord === 1){
            res.status(200).json({message:"Deleted successfully"});          
        }
        else
        {
            res.status(404).json({message:"record not found"})
        }
    })
    .catch(function (error){
        res.status(500).json(error);
    }); 
     
}

async function authUser(req, res) {
    try {
      const { username, password } = req.body;
      //Execute query
      const user = await dbManager.User.findOne({
        //insertar autenticación
        where: {
          username: username,
          password: password
        }
      });
      //Send response
      if (user) res.json("usuario logeado correctamente");
      else res.json("usuario o contraseña incorrecta");
    } catch (e) {
      // Print error on console
      console.log(e);
      // Send error message as a response
      res.status(500).send({
        message: "Some error occurred"
      });
    }
  }
    
exports.createUser = createUser;
exports.findAllUsers = findAllUsers;
exports.findUserById = findUserById;
exports.deleteByUser= deleteByUser;
exports.authUser=authUser;
