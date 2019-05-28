const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

const hbs = require('hbs');

require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');




app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'Jorge'

    });
    // res.send('Hola Mundo');
});

app.get('/about', (req, res) => {


    res.render('about');
    // res.send('Hola Mundo');
});

app.listen(port, () => console.log(`Escuchando el puerto ${port}`));