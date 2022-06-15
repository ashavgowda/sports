const express = require("express");
const app = express();

var conn = require("./config/db");

//Start mongo Connection.
conn.mongoose_connection();

// Routes

app.use("/", require("./routes/user"));
app.use("/", require("./routes/participants"));
app.use("/", require("./routes/sports"));
app.use("/", require("./routes/participantsList"));
app.use("/", require("./routes/venues"));

app.listen(3001);
