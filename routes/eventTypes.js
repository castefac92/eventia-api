const express = require('express');
const list = require("../utils/list");
const router = express.Router();

router.get('/event-types', (req, res) => {
     // #swagger.responses[200] = {
     //      description: "Operacion exitosa",
     //      content: {
     //        "application/json": {
     //          schema: {
     //            $ref: "#/definitions/myReferencedEventTypeArray"
     //          }
     //        }
     //      }
     //  }

    res.json(list)
})

module.exports = router;
