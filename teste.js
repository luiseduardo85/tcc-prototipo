const express = require('express');

const exphbs = require("express-handlebars")

const app = express()

const port = 3000;

const path = require('path')

const fileup = require('./fileup')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/fileup', fileup)

app.get("/", function (req, res) {
    res.sendFile(`${basePath}/index.html`);
    
});
app.listen(port, () => {
    console.log("Servidor iniciado")
})

