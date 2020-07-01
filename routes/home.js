const express = require('express'),
      router = express.Router()
      sql = require("../database");


router.get('/', (request, response) => {
    sql.Point.findAll({ attributes: ['number', 'color'] })
    .then((res) => {
        let object = {}
        res.forEach(element => {
            object[element.number] = element.color
        });

        response.render('index', {
            points: object
        })
    })
    .catch((err) => {
        throw err;
    })
})
    

router.post('/', (request, response) => {
    sql.Point.create({
        number: parseInt(request.body.number),
        color: request.body.color
    })
    .then((res) => {
        request.io.sockets.emit('cell', {
            type: "POST",
            number: parseInt(request.body.number),
            color: request.body.color
        })
    })

})

module.exports = router