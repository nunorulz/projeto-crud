const express = require('express');
const path = require('path');

const db = require('./database');
const routes = require('./routes');
const app = express();

db.connect();

//define o template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//define os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//habilita server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }));

//definindo as rotas
app.use('/', routes);

//404
app.use((req, res) => {
  res.send('Página não encontrada!');
});

//executa o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
