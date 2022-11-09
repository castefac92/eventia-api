const express = require("express");
/*const billsRoute = require("./routes/bill");*/
const eventTypesRoute = require("./routes/eventTypes");
const purchaseRoute = require("./routes/purchase");

// settings
const app = express();
const PORT = process.env.PORT || 3000; 
app.set("token", process.env.TOKEN || "recipeT0k3n");
app.listen(PORT, () => console.log(`Escuchando en puerto", ${PORT}`));

// middlewares
app.use(express.json());
/*app.use("/api", billsRoute);*/
app.use("/api", eventTypesRoute);
app.use("/api", purchaseRoute) ;
  
// routes
app.get("/", (req, res) => {
  res.send("Eventia API");
});



