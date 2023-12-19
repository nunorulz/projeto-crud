const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

//define o template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//define os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//habilita server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }));

//rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Título Teste',
  });
});

//404
app.use((req, res) => {
  res.send('Página não encontrada!');
});

//executa o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
