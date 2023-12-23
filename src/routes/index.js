const router = require('express').Router();

const CustomersController = require('../controllers/customers');
const indexController = require('../controllers/index');

//rotas
router.get('/', IndexController.index);

//Registro
router.get('/register', CustomersController.index);
router.post('/register/new', CustomersController.add);

//Lista usuários
router.get('/list', CustomersController.list);

//Editor
router.get('/edit', CustomersController.formEdit);
router.post('/edit/:id', CustomersController.edit);

//Remover
router.get('/remove/:id', CustomersController.remove);

module.exports = router;
