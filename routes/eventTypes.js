const express = require('express');
const list = require("../utils/list");
const router = express.Router();

// arreglo de boletas
const event = [
  {id: '1', title: "Animación", description: 'Juan Perez', price: 919.00, image: 'Americana'},
  {id: '2', title: "Decoración",description: 'Maria Sanchez', price: 339.00, image: 'Hawaiana'},
  {id: '3', title: "Catering", description: 'Cesar Lopez', price: 400.00, image: 'Napolitana'},
  {id: '4', title: "Talleres", description: 'Luis Garcia', price: 333.33, image: 'Napolitana'},
];





router.get('/events', (req, res) => {
  /* #swagger.responses[200] = {
          description: "Operacion exitosa",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/myReferencedBillArray"                             
              }
            }
          }
      }
  */
  res.send(events);
});
     router.post('/events', (req, res) => {
        const event= {
          id: (Math.floor(100000 + Math.random() * 900000)).toString(),
          description: "El evento.",
          price: Math.floor(1000 + Math.random() * 9000),
          image:"https://www.museoschile.gob.cl/sites/www.museoschile.gob.cl/files/styles/16x9_grande/public/2021-12/20191203_171919.jpg?h=0ee24b5e&itok=GqEInylN",
          title: req.body.title
        }
        /* #swagger.requestBody = {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Bill"
                  }
                }
              }
            }
      
           #swagger.responses[200] = {
              description: "Operacion exitosa",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Bill"
                  }
                }
              }
            }
        */
      
        events.push(event);
        res.send(event);
      })
     





module.exports = router;
