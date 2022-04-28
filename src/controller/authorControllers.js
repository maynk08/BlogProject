const authorModel = require('../modules/authorModule')


/*------------------------------------------------------------------------------------------
 ## Author APIs /authors
 -> Create an author - atleast 5 authors
 -> Create a author document from request body. Endpoint: BASE_URL/authors
------------------------------------------------------------------------------------------ */


const createAuthor = async function (req, res) {
    try {
        const reqAuthor = req.body;
        if (Object.keys(reqAuthor).length == 0) {
            return res.status(400).send({
                status: false,
                msg: "Body is required"
            })
        }
        const saveData = await authorModel.create(reqAuthor)
        res.status(201).send({
            status: true,
            data: saveData
        })
    } catch (err) {
        console.log(err.message)
        res.status(400).send({
            status: false,
            msg: err.message
        })
    }
}


module.exports.createAuthor = createAuthor