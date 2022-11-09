const swaggerAutogen = require("swagger-autogen")({openapi: "3.0.0"});
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/eventTypes.js", "./routes/purchase.js"];

const doc = {
  info: {
    title: 'Eventia API',
    description: 'Eventia API',
  },
  servers: [
    {
      url: "https://infobaseapi.herokuapp.com/api"
    }
  ],
  components: {
    "@schemas": {
      EventType: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "numero de la boleta",
            example: "1"
          },
          title: {
            type: "string",
            description: "sub total de la boleta",
            example: "titulo"
          },
          description: {
            type: "string",
            description: "descripcion del evento",
            example: "Lorem Ipsum"
          },
          image: {
            type: "string",
            description: "imagen del servicio",
            example: "..."
          },
          user: {
            type: "string",
            description: "nombre del usuario",
            example: "Maria Pia"
          }
        },
        example: {
          id: "015673",
          title: 99.99,
          description: "Descripcion",
          image: "...",
          user: "Maria Pia"
        }
      }
    }
  },
  definitions: {
    myReferencedEventTypeArray: [{ $ref: "#/definitions/EventType" }]
  }
};

swaggerAutogen(outputFile, endpointsFiles, doc);
