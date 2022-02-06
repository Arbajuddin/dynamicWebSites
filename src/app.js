const express = require ("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;


// Path........
const staticPath = path.join(__dirname, "../public");
const dynamicPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials")



app.set("view engine", "hbs");
app.set("views", dynamicPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// Routing........
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/blogs", (req, res) => {
    res.render("blogs");
});

app.get("*", (req, res) => {
    res.render("404", {
        errorMsg : "OOPS!!! ErrorPage Not Found "
    });
});


// Function Call............
app.listen(port, () => {
    console.log(`Listening port Number ${port}`)
});