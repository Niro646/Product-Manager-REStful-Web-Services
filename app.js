const express = require("express");

// Load environment file
require("dotenv").config();
//setup db connection
require("./src/config/db");

const apiRoutes = require("./src/routes/api.routes"); // importing routes
const app = express();
app.use(express.json()); // needed to get the data from request body, pass the data un json form in order for it to work

//api routes
app.use("/api", apiRoutes); // so app could use the routes made

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`My Server is running at http://localhost:${port}`);
});
