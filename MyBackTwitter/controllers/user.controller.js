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

async function findAllUsers (req,resp){

    try {
    
    const allUsers = await dbManager.User.findAll();

    res.send(
        {
            data: allUsers
        }
    );
    } catch(error){
        console.log(error);
        res.status(500).send(
            {
                message:":( LO LAMENTAMOS ALGO HA SALIDO MAL :("
            }
        )
    }
}

exports.createUser = createUser;
exports.findAllUsers = findAllUsers;