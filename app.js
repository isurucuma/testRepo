const express = require("express");

const session = require("express-session");
const routes = require("./routes/routes");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", routes);

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(3000);
