const dbManager = require('../database/db.manager');

/**
 * @param {*} req
 * @param {*} res
*/

function createUser (req,res){
    if (!req.body) {
        res.status(400).send({
          message: "REQ ESTÁ VACÍO! OUT OF GAS!:("
        });
        return;
    }
    const newUserObject ={
        username: req.body.username,
        creation_date: req.body.creation_date
    }

    dbManager.User.create(newUserObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        error => {
           console.log(error);
           res.status(500).send({
                message: ":( HUBO UN ERROR"
            });
        }
    );
}

exports.createUser = createUser;