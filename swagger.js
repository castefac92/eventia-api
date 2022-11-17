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
      url: "https://eventia-api.herokuapp.com/api"
    }
  ],
  components: {
    "@schemas": {
      EventType: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "id del evento",
            example: "1"
          },
          title: {
            type: "string",
            description: "nombre de evento",
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
          id: "1",
          title: "titulo",
          description: "Lorem Ipsum",
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
