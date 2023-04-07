const express = require("express");
const v1Router = require("./v1/routes");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const bodyParser = require("body-parser");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
// const apicache = require("apicache");

const app = express();
// const cache = apicache.middleware;

const PORT = process.env.PORT || 3000;

// *** REMOVE ***
// app.get("/", (req, res) => {
//     res.send("<h2>It's Working!</h2>");
//   });

// app.use("/app/v1", v1Router);

// To cache all requests
// app.use(cache("2 minutes"));
app.use(bodyParser.json());
app.use("/app/v1/workouts", v1WorkoutRouter);
app.listen(PORT, () => {
  console.log("API is listening on port: ", PORT);
  V1SwaggerDocs(app, PORT);
});
