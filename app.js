const routes = require("./router");
const express = require("express");
const PORT = 8080

var app = express();

//calls middleware
app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));