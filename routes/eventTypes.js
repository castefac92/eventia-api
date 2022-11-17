const express = require('express');
const list = require("../utils/list");
const router = express.Router();

const events=
[
  {
    id: 1,
    title: "Animación", 
    description: "El evento de animación está diseñado para todo lo relacionado con fiestas infantiles. Una vocalista irá con 3 animadores (Los que usted elija) y hará una sección de juegos, cuentos y demás!!\n" +
        "\n" +
        "Se puede elegir hasta 3 animadores: Pollo grande, Timoteo, Barney, Mago, Buzz Lightyear, Broly, Barbie, Pikachu, Minie.\n" +
        "\n" +
        "Incluye bailarines, banda para fiesta de cumpleaños y 2 copias de vídeo de la fiesta.",
    price: "5500",
    image: "https://lagranjavilla.com/img/ServiciosCumple.jpg"
},
{
  id: 2,
    title: "Decoración",
    description: "El evento de decoración está diseñado para eventos como quinceañeros, bodas y demás.\n" +
        "Se pondrá de 10 a 30 mesas y una banda para dicho evento.\n" +
        "Incluye un vocalista para la ceremonia.\n",
    price: 7500,
    image: "https://www.montiboli.com/assets/uploads/hoteles/montiboli/gallery/blog/2018/29-protocolo-boda-de-dia/boda-de-dia-en-el-hotel-montiboli-d.jpg"
},
{
  id: 3,
    title: "Catering",
    description: "El evento de decoración está diseñado para eventos como quinceañeros, bodas y demás.\n" +
        "Se pondrá de 10 a 40 mesas y una banda para dicho evento.\n" +
        "Incluye un vocalista para la ceremonia.\n",
    price: 7500,
    image: "https://cdn0.matrimonios.cl/article-real-wedding/942/3_2/960/jpg/621022.jpeg"
}
,
{
  id: 4,
    title: "Talleres",
    description: "El evento de decoración está diseñado para eventos como quinceañeros, bodas y demás.\n" +
        "Se pondrá de 10 a 30 mesas y una banda para dicho evento.\n" +
        "Incluye un vocalista para la ceremonia.\n",
    price: 7500,
    image: "https://www.museoschile.gob.cl/sites/www.museoschile.gob.cl/files/styles/16x9_grande/public/2021-12/20191203_171919.jpg?h=0ee24b5e&itok=GqEInylN"
}

]





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
