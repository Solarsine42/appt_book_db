const express = require("express");
const bodyParser = require("body-parser");
const port = 8000;
const cors = require("cors");
const users = require("./routes/users");
const appts = require("./routes/appts");
const meetings = require("./routes/meetings");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/users", users);
app.use("/appts", appts);
app.use("/meetings", meetings);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
