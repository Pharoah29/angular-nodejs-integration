const express = require("express");

const path = require("path");

const apiRoute = require("./server/routes/api.route");

const app = express();

let port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "dist")));

//enable CORS for all requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/users", apiRoute);

//redirect all top-level get requests to the dist index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
