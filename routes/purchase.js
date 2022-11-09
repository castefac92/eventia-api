const express = require('express');
const list = require("../utils/list");
const router = express.Router();

const users = [
    "Maria Pia",
    "Rodolfo La Rosa",
    "Victor Hernandez",
    "Momo Sad"
]

router.get('/purchase/:id', (req, res) => {
    const {id} = req.params

     // #swagger.responses[200] = {
     //      description: "Operacion exitosa",
     //      content: {
     //        "application/json": {
     //          schema: {
     //            $ref: "#/definitions/EventType"
     //          }
     //        }
     //      }
     //  }

    const event = list.find(item => item.id === Number(id))
    res.json({...event, user: users[id-1]})
})

module.exports = router;
