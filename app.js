const express = require("express");
const route = require("./routes");
const app = express();
const port = 8080;
const path = require('path');
const hbs = require("hbs");


app.use('/', route);
app.use('/public', express.static('public'));
app.use('/assets', express.static('assets'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './pages/views'))

hbs.registerPartials(path.join(__dirname, './pages/common'))
hbs.registerPartials(path.join(__dirname, './pages/widget'))

app.listen(port, () => {
    console.log("server start on 8080")
})